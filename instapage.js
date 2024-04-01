const urlParams = new URLSearchParams(window.location.search);
const isFirstPage = false;
const step_count = "";
const page_id = "";
const version_id = "";
const country = null;
const discountCode = "";

const params = { cc: discountCode };
for (let key in params) {
  urlParams.set(key, params[key]);
}

const buttonIds = [];
const noButtonIds = [];
const redirectUrl = `https://.com?${urlParams}`;
const noThanksRedirect = `https://.com?${urlParams}`;

//stop here.
const origin = window.location.pathname.replace("/", "").replace("/", "");
const cookieConfig = "path=/; domain=.buckedup.com;max-age=3600";
document.cookie = `offer_id=${discountCode};${cookieConfig}`;
document.cookie = `page_id=${page_id};${cookieConfig}`;
urlParams.forEach((value, key) => {
  document.cookie = `${key}=${value};${cookieConfig}`;
});
if (isFirstPage) localStorage.setItem("first_page", origin);
