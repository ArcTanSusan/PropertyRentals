import { promisedTimeout } from "../helpers/timeout.ts";
import random from "lodash/random";

export interface SearchResponse {
    results: Property[];
    page: number;
    pageSize: number;
    pageTotal: number;
}

export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    city: string;
    roomsAvailable: number;
    availabilityDate: string;
    picture: string;
    isLiked: boolean;
}

interface PropertySearchFilters {
    pageSize?: number;
    page?: number;
    minPrice?: number;
    maxPrice?: number;
    availableToday?: boolean;
    city?: string;
}

function generateURL(title: string): string {
    return `/property_img/${title}.jpg`;
}

const titles = [
    "High-Rise Luxury Condo",
    "Chic Downtown Loft",
    "Modern City Apartment",
    "Elegant Penthouse Suite",
    "Stylish Studio",
    "Contemporary Urban Flat",
    "Executive City Center Apartment",
    "Sophisticated Townhouse",
    "Cosmopolitan Residence",
    "Skyline View High-Rise",
    "Urban Oasis Apartment",
    "City Center Retreat",
    "Trendy Neighborhood Flat",
    "Upscale Urban Home",
    "Metropolitan Executive Suite",
    "Central City Living Space",
    "Fashionable Urban Condo",
    "Sleek City Loft",
    "Dynamic Urban Dwelling",
    "Metropolitan Penthouse",
    "Cityscape Apartment",
    "Urban Elegance Suite",
    "Central Business District Flat",
    "Modernist Urban Abode",
    "City Chic Residence",
];

const descriptions = [
    "Luxurious condo with top-notch amenities and a breathtaking view of the skyline.",
    "Stylish loft in the heart of downtown, perfect for city enthusiasts.",
    "Modern apartment with advanced features, situated in a vibrant urban area.",
    "Penthouse offering elegance and panoramic views of the city.",
    "Compact yet fashionable studio in a prime urban location.",
    "Flat with a contemporary design and urban charm, in a central locale.",
    "Apartment designed for professionals, located in the heart of the city.",
    "Townhouse combining modern comforts with a touch of sophistication.",
    "Residence offering high-end finishes and a cosmopolitan lifestyle.",
    "High-rise apartment with stunning views and a prime location.",
    "Peaceful apartment providing a serene retreat in the urban jungle.",
    "Charming and conveniently located retreat in the city center.",
    "Flat in a trendy area, surrounded by popular city attractions.",
    "Luxury urban home with upscale amenities in a prime setting.",
    "Suite in a prestigious location, ideal for business executives.",
    "Enjoy the essence of city living in this well-appointed living space.",
    "Condo with a fashionable and contemporary urban feel.",
    "City loft featuring a modern, open-plan layout.",
    "Vibrant dwelling in the heart of the city's dynamic neighborhood.",
    "Luxurious penthouse in the city's metropolitan area, with unmatched views.",
    "Apartment with modern comforts, framed by an impressive cityscape.",
    "Suite that epitomizes urban elegance and luxury.",
    "Stay in style in this convenient flat, located in the business district.",
    "Unique urban abode with modernist design in a central location.",
    "Residence offering chic city living with style and convenience.",
];

const getRandomPrice = () =>
    Math.floor(Math.random() * (2500 - 200 + 1)) + 1000;
const getRandomRooms = () => Math.floor(Math.random() * 5);
const getRandomDate = () => new Date().toISOString().split("T")[0];
const getRandomCity = () => (Math.random() < 0.5 ? "Atlanta" : "New York");

const properties: Property[] = titles.map((title, index) => ({
    id: index,
    title: title,
    description: descriptions[index],
    price: getRandomPrice(),
    city: getRandomCity(),
    roomsAvailable: getRandomRooms(),
    availabilityDate: getRandomDate(),
    picture: generateURL(title),
    isLiked: false,
}));

function filterProperties(filters: PropertySearchFilters): SearchResponse {
    const {
        pageSize = 10,
        page = 1,
        minPrice = 0,
        maxPrice = Number.MAX_SAFE_INTEGER,
        availableToday = false,
        city = "",
    } = filters;

    if (!pageSize) {
        return {
            results: [],
            page,
            pageSize,
            pageTotal: 0,
        }
    }

    const todayDate = new Date().toISOString().split("T")[0];

    const filteredResult = properties
        .filter(
            (property) =>
                property.price >= minPrice &&
                property.price <= maxPrice &&
                (!availableToday || property.availabilityDate === todayDate) &&
                (city === "" || property.city === city)
        )
        .slice((page - 1) * pageSize, page * pageSize);

    return {
        results: filteredResult,
        page,
        pageSize,
        pageTotal: Math.ceil(properties.length / pageSize)
    }
}

export function fetchProperties(
    filters: PropertySearchFilters
): Promise<SearchResponse> {
    return promisedTimeout(
        random(1000, 2000),
        structuredClone(filterProperties(filters))
    );
}

export function mutateLikeProperty(
    id: number,
    value: boolean
): Promise<Property> {
    const foundProperty = properties.find((p) => p.id === id);

    if (!foundProperty) {
        return promisedTimeout<any>(random(1000, 2000), "Property not found", true);
    }

    foundProperty.isLiked = value;
    return promisedTimeout(random(1000, 2000), structuredClone(foundProperty));
}
