/**
 * Count references in a markdown article body
 * References are identified as paragraphs after "## Referensi" heading
 * Each non-empty paragraph after that heading counts as one reference
 */
export function countReferences(body: string): number {
  if (!body) return 0;

  // Find the "## Referensi" section
  const referencesSectionRegex = /##\s+Referensi\s*\n/i;
  const match = body.match(referencesSectionRegex);
  
  if (!match || match.index === undefined) return 0;

  // Get everything after "## Referensi"
  const afterReferences = body.slice(match.index + match[0].length);
  
  // Stop at next heading (if any)
  const nextHeadingMatch = afterReferences.match(/\n##?\s+/);
  const referencesContent = nextHeadingMatch 
    ? afterReferences.slice(0, nextHeadingMatch.index)
    : afterReferences;

  // Split into paragraphs and count non-empty ones
  const paragraphs = referencesContent
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0 && !p.match(/^-{3,}$/)); // Exclude "---" separators

  return paragraphs.length;
}