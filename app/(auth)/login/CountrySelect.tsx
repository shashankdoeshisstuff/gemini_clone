'use client';
import { useEffect, useState } from "react";
import { Country } from "@/types";

// API response type
type RawCountry = {
  name: { common: string };
  idd?: { root?: string; suffixes?: string[] };
};

export default function CountrySelect({ onChange }: { onChange: (value: string) => void }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,idd");
        const data = (await res.json()) as RawCountry[];

        const formatted = data
          .filter((c): c is Required<RawCountry> & { idd: { root: string; suffixes?: string[] } } =>
            Boolean(c.idd?.root)
          )
          .map((c) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] ?? "")
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formatted);
      } catch (err: unknown) {
        console.error("Failed to fetch countries:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-l-lg p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <option>Loading...</option>
      </select>
    );
  }

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    >
      {countries.map((country) => (
        <option key={`${country.name}-${country.code}`} value={country.code}>
          {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}
