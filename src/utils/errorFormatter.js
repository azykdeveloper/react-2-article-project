export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatErrors(errorObj) {
  if (!errorObj || typeof errorObj !== "object") return [];

  return Object.entries(errorObj).map(([field, messages]) => {
    if (Array.isArray(messages)) {
      return `${capitalize(field)} ${messages[0]}`;
    }
    return `${capitalize(field)} ${messages}`;
  });
}
