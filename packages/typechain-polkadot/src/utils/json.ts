/**
 * Minimizes JSON string by removing whitespaces and newlines.
 * @param json - JSON string
 */
export function minimizeJson(json: string): string {
	// remove whitespace as it causes issues when parsing JSON
	return JSON.stringify(JSON.parse(json)).replace(/\\n/g, '').replace(/\\r/g, '').replace(/\\t/g, '');
}
