import { AppDetails, UserProfile} from '../Marketplace/types'

export interface AppDetailsProps {
  getAppConnectorConfigAction: (appID: string) => void
  selectedAppDetails: AppDetails
  userProfile: UserProfile
}
