type RootStackParamList = {
    home: undefined;
    details: {id: number, title: string, content: string, rating: number} | undefined;
    about: undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
  };
declare global {
  namespace ReactNavigation{
    interface RootStackParamList extends RootStackParamList {}
  }
}
declare module "*.png";