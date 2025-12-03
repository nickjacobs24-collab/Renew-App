"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "savedSupplements";

export function useSavedSupplements() {
  const [savedSupplements, setSavedSupplements] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSavedSupplements(JSON.parse(stored));
      } catch {
        setSavedSupplements([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever savedSupplements changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedSupplements));
    }
  }, [savedSupplements, isLoaded]);

  const isSaved = (id) => savedSupplements.includes(id);

  const toggleSave = (id) => {
    setSavedSupplements((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const removeSupplement = (id) => {
    setSavedSupplements((prev) => prev.filter((s) => s !== id));
  };

  return {
    savedSupplements,
    isSaved,
    toggleSave,
    removeSupplement,
    isLoaded,
  };
}