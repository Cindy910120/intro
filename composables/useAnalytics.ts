import { logEvent, setUserProperties, setUserId } from 'firebase/analytics'

export const useFirebaseAnalytics = () => {
  const { $firebase } = useNuxtApp()

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if ($firebase.analytics && process.client) {
      logEvent($firebase.analytics, eventName, parameters)
    }
  }

  const trackPageView = (pageName: string, pageTitle?: string) => {
    trackEvent('page_view', {
      page_title: pageTitle || pageName,
      page_location: window.location.href
    })
  }

  const trackUserAction = (action: string, category?: string, label?: string, value?: number) => {
    trackEvent('user_action', {
      action,
      category,
      label,
      value
    })
  }

  const trackGameEvent = (gameName: string, event: string, score?: number) => {
    trackEvent('game_event', {
      game_name: gameName,
      event_type: event,
      score
    })
  }

  const setUserProps = (properties: Record<string, any>) => {
    if ($firebase.analytics && process.client) {
      setUserProperties($firebase.analytics, properties)
    }
  }

  const setAnalyticsUserId = (userId: string) => {
    if ($firebase.analytics && process.client) {
      setUserId($firebase.analytics, userId)
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackUserAction,
    trackGameEvent,
    setUserProps,
    setAnalyticsUserId
  }
}
