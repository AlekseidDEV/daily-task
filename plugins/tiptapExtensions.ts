import {Placeholder} from "@tiptap/extension-placeholder";
import {StarterKit} from "@tiptap/starter-kit";

declare module "#app" {
    interface NuxtApp {
        $tiptapExtensions: {
            StarterKit: typeof StarterKit
            Placeholder: typeof Placeholder
        }
    }
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            tiptapExtensions: {
                StarterKit,
                Placeholder
            }
        }
    }
})