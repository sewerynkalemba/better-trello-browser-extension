import { LocalSync, localSyncKeys } from "../queries/storage";
setTimeout(initial, 1500);

let browser: typeof chrome;

async function getLocalSync() {
  if (typeof browser === "undefined") {
    browser = chrome;
  }

  const localSync = (await browser.storage.sync.get(
    localSyncKeys
  )) as LocalSync;

  return localSync;
}

function initial() {
  addImportRulesButton();
}

function addImportRulesButton() {
  const html = `<i class="icon-up icon-sm" aria-label="up icon"></i> Import rules`;

  const button = document.createElement("a");
  button.className = "item";
  button.innerHTML = html;

  button.addEventListener("click", async () => {
    const localSync = await getLocalSync();
    alert(localSync.butlerToken);

    // const modal = document.createElement("div");
    // modal.className = "bttr-modal";
    // modal.innerHTML = `
    //   <div class="bttr-modal">
    //     <div class="bttr-modal-content">
    //       <span class="bttr-modal-close">&times;</span>
    //       <h2>Import rules</h2>
    //       <p>Import your custom rules here</p>
    //       <textarea class="bttr-import-rules"></textarea>
    //       <button class="bttr-import-rules-button">Import</button>
    //     </div>
    //   </div>
    // `;

    // document.body.appendChild(modal);
  });

  document.querySelector(".ui.dashboard-tabs")?.appendChild(button);
}
