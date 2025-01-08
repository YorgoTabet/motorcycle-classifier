import { PredictionItem } from "../models/predict";

/**
 * Parses the `data` array from a JSON response with single quotes.
 * @param {string} jsonData - The JSON response string array.
 * @returns {Array<Object>} - An array of parsed objects from the `data` field.
 */
export function parseDataArray(jsonData?: string[]): Array<PredictionItem> | undefined {
    try {
        // Convert each string in the `data` array to a proper object
        return jsonData?.map((item: string) => {
            // Replace single quotes with double quotes and parse
            const correctedItem = item.replace(/'/g, '"');
            return JSON.parse(correctedItem);
        });
    } catch (error) {
        console.error("Error parsing data array:", error);
        return [];
    }
}