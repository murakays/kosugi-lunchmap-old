// 必要なモジュールのみexportする
export default function exportIfNeeded(
  functionName: string,
  exports: { [key: string]: any },
): void {
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(`./functions/${functionName}`).default;
  }
}

// functions
exportIfNeeded('getRestaurantList', exports);
