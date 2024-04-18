# Script for redirecting and handling dataLayer

```
<scrip>
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
  const getTopLevelDomain = () => {
    const fullDomain = window.location.hostname;
    const domainRegex = /\.([a-z]{2,})\.([a-z]{2,})$/;
    const match = fullDomain.match(domainRegex);
    if (match) {
        return `.${match[1]}.${match[2]}`;
    } else {
        return fullDomain;
    }
	};
  const cookieConfig = `path=/; domain=${getTopLevelDomain()};max-age=3600`;
  document.cookie = `offer_id=${discountCode};${cookieConfig}`;
  document.cookie = `page_id=${page_id};${cookieConfig}`;
  urlParams.forEach((value, key) => {
    document.cookie = `${key}=${value};${cookieConfig}`;
  });
  if (isFirstPage) localStorage.setItem("first_page", origin);
</script>
<script src="https://cdn.jsdelivr.net/gh/Bucked-Up/lp-redirect@1/script.js"></script>
```
