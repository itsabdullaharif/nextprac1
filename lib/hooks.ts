import useSWR from 'swr'
import playlist from '../pages/api/playlist'
import fetcher from './fetcher'

export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)
  console.log(data)
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const usePlaylist = () => {
  const { data, error } = useSWR('/playlist', fetcher)
  console.log(error)
  return {
    playlists: (data as any) || [],

    isLoading: !data && !error,
    isError: error,
  }
}
