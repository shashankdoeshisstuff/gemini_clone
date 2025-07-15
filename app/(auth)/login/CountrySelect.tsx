import { useEffect, useState } from "react";
import { Country } from "@/types";

export default function CountrySelect({ onChange }: { 
  onChange: (value: string) => void 
}) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd");
        const data = await response.json();
        
        const formatted = data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || "")
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        
        setCountries(formatted);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    };

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
        // Fixed: Use a combination of name and code for unique keys
        <option key={`${country.name}-${country.code}`} value={country.code}>
          {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}