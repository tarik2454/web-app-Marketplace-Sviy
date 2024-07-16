export default function phoneFormattingBeforeSending(
  object: Record<string, any>,
  key: string
): string {
  if (typeof object[key] === 'string') {
    object[key] = object[key].replace(/[\s()]/g, '');
  }
  return object[key];
}
