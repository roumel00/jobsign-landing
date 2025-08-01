import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Fetches the organization ID from a slug, using sessionStorage cache when available
 * @param {string} slug - The organization slug
 * @returns {Promise<string>} - The organization ID
 */
export const getOrgIdFromSlug = async (slug) => {
  try {
    // Check if we have the ID in sessionStorage first
    const storedId = getStoredOrgIdForSlug(slug);
    if (storedId) {
      return storedId;
    }
    
    // If not in sessionStorage, fetch from API
    const res = await fetch(`/api/organisations/access?slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch organization data');
    }
    const data = await res.json();
    
    // Store for future use
    storeOrgIdForSlug(slug, data.organisation.id);
    
    return data.organisation.id;
  } catch (error) {
    console.error('Error fetching organization ID:', error);
    throw error;
  }
};

/**
 * Stores the current organisation ID in sessionStorage for retrieval across the app
 * @param {string} slug - The organisation slug
 * @param {string} id - The organisation ID
 */
export const storeOrgIdForSlug = (slug, id) => {
  if (typeof window !== 'undefined' && slug && id) {
    const key = `org_id_${slug}`;
    sessionStorage.setItem(key, id);
  }
};

/**
 * Gets the stored organisation ID for a given slug
 * @param {string} slug - The organisation slug
 * @returns {string|null} - The stored organisation ID or null if not found
 */
export const getStoredOrgIdForSlug = (slug) => {
  if (typeof window !== 'undefined' && slug) {
    const key = `org_id_${slug}`;
    return sessionStorage.getItem(key);
  }
  return null;
};
