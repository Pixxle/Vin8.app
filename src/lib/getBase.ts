export default function getBaseUrl() {
  return process.env.NODE_ENV === "production"
    ? "https://www.vin8.app"
    : "http://localhost:3000";
}
