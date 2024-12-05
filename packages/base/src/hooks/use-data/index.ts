import { onUnmounted } from 'vue'

import type { CustomComponent } from '../../component'

export const useData = (
  component: CustomComponent,
  callbackData?: (data: any, type?: string) => void
) => {
  if (callbackData) {
    component.setDataChangeCallback(callbackData)
  }
  onUnmounted(() => {
    if (component.dataConfig?.dataInstance.close) {
      component.dataConfig?.dataInstance.close()
    }
  })
}
