import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "15s",
};

export default function () {
  const id = __VU;

  const payload = JSON.stringify({
    visitor_id: `VUSER-${id}`,
    browser: "Synthetic Browser",
    platform: "Synthetic Linux",
    screen: {
      width: 1920,
      height: 1080,
    },
    language: "en-US",
    simulated: true,
  });

  const response = http.post("https://ahmed7091.github.io/redirect", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  check(response, {
    "status is successful": (r) => r.status === 200,
  });

  sleep(1);
}
