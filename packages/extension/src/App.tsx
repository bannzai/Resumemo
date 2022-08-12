import { Button, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [allBookmarks, setAllBookMarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);

  function fillField(): any {
    console.log("Log");
    const companyName = document.querySelector(
      "#__next > div > div:nth-child(3) > div > div > div.custom-15ah0wj > div > div > div.inner > form > div > div.custom-1u2rljt.e1x6klg10 > div.edit-mode.custom-hb0726.e38vgb16 > div.custom-11hnryi.e38vgb15 > div > div:nth-child(1) > div:nth-child(1) > div > input"
    ) as HTMLInputElement;
    const projectName = document.querySelector(
      "#__next > div > div:nth-child(3) > div > div > div.custom-15ah0wj > div > div > div.inner > form > div > div.custom-1u2rljt.e1x6klg10 > div.edit-mode.custom-hb0726.e38vgb16 > div.custom-11hnryi.e38vgb15 > div > div:nth-child(2) > div > div > div.custom-11hnryi.e38vgb15 > input"
    ) as HTMLInputElement;
    const description = document.querySelector(
      "#__next > div > div:nth-child(3) > div > div > div.custom-15ah0wj > div > div > div.inner > form > div > div.custom-1u2rljt.e1x6klg10 > div.edit-mode.custom-hb0726.e38vgb16 > div.custom-11hnryi.e38vgb15 > div > div:nth-child(2) > div > div > div:nth-child(9) > textarea"
    ) as HTMLInputElement;

    companyName.removeAttribute("aria-autocomplete");
    companyName.removeAttribute("aria-expanded");
    companyName.removeAttribute("role");
    projectName.removeAttribute("aria-autocomplete");
    projectName.removeAttribute("aria-expanded");
    projectName.removeAttribute("role");

    companyName.onfocus = () => {};
    projectName.onfocus = () => {};
    companyName.oninput = () => {};

    companyName.setAttribute("value", "株式会社の星");
    projectName.setAttribute("value", "Project X");
    description.setAttribute("value", "ニンニク美味しい！");

    console.log({ element: companyName });
    return companyName ?? 10;
  }

  function onClick(): void {
    console.log("aaaa");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const firstTab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: firstTab.id! },
          func: fillField,
        },
        (r) => {
          console.log({ r });
        }
      );

      console.log(`${JSON.stringify({ firstTab })}`);
    });
  }

  useEffect(() => {
    chrome.bookmarks.search({}, (bookmarkItems) => {
      setAllBookMarks(bookmarkItems.filter((item) => "url" in item));
    });
  }, []);

  return (
    <div>
      <VStack>
        <Button onClick={() => onClick()}>Button</Button>
      </VStack>
    </div>
  );
};

export default App;
