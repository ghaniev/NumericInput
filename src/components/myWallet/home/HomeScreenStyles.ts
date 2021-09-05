import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  accountItemContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountItemName: {
    fontWeight: '600',
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#2dbefa',
    marginHorizontal: 20,
  },
});
