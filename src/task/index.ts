export default function snakeCase(value: string): string {
    const snakeCasedValue = value
        .replace(/[^a-zA-Z0-9]/g, " ")
        .trim()
        .replace(/\s{1,}/g, "_")
        .toLowerCase()

    return snakeCasedValue
}
