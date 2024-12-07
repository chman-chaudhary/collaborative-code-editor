import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { CollaborativeEditor } from "./components/CollaborativeEditor";

function App() {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_mhjz2DNdkcsryF-WUAgJHeIsBdwj3iDkR6FsvWGc6R2ADJRgnDJhbaW9wEERSTKP"
      }
    >
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <CollaborativeEditor />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

export default App;
