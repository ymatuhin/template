const fs = require("fs");
const path = require("path");
const critical = require("critical");
const { render, routes: appRoutes } = require("./dist/entry-server.js");

const routes = ["/", "/404"];
const getOutFileName = (url) => (url === "/" ? "index" : url.replaceAll("/", ""));
const template = fs.readFileSync(path.resolve(__dirname, "dist/index.html"), "utf-8");

const getTemplate = (renderHtml) => {
  let output = template;
  if (!template.includes("<!--ssr-outlet-->"))
    throw new Error("<!--ssr-outlet--> not found in template");

  console.info(`# [renderHtml]`, renderHtml);
  // output = output.replace(`<!--ssr-outlet-->`, renderHtml);

  // if (!template.includes("<!--head-outlet-->"))
  //   throw new Error("<!--head-outlet--> not found in template");
  // if (!template.includes("<!--title-outlet-->"))
  //   throw new Error("<!--title-outlet--> not found in template");

  return output;
};

const addCriticalCss = (outputName) =>
  critical.generate({
    inline: true,
    base: "./dist",
    src: `./dist/${outputName}`,
    target: outputName,
    minify: true,
    // If you use mobile first, you don't need to specify lower size
    width: 1200,
    height: 1000,
  });

const prerender = async (url) => {
  const outputName = `${getOutFileName(url)}.html`;

  const route = appRoutes.find(({ path }) => path === url);
  const ActiveRoute = await route.getComponent();
  console.info(`# [ActiveRoute]`, ActiveRoute);

  const html = render(url, ActiveRoute);
  console.info(`# [html]`, html);
  if (!html) throw new Error(`Empty html rendered for ${url}`);
  // fs.writeFileSync(`./dist/${outputName}`, getTemplate(html));
  console.log(`Route "${url}" => "${getOutFileName(url)}.html" prerendered ✅`);
  // addCriticalCss(outputName);
  // console.log(`Critical CSS for "${getOutFileName(url)}.html" inlined ✅`);
};

routes.forEach(prerender);
