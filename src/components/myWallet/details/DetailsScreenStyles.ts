import {StyleSheet} from 'react-native';

export const DetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  transactionListHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    borderWidth: 0.3,
    borderBottomColor: 'grey',
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  markerContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sumText: {
    fontSize: 17,
    fontWeight: '500',
  },
  commentText: {
    fontSize: 15,
    color: 'grey',
  },
  accountDetails: {
    height: '20%',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#2dbefa',
  },
  accountName: {
    fontSize: 17,
    color: 'white',
  },
  accountBalance: {
    fontSize: 23,
    color: 'white',
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

export const DetailsTransactionModalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    marginHorizontal: 20,
  },
  inputHeaderText: {
    fontSize: 17,
    fontWeight: '600',
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    paddingLeft: 10,
    width: '100%',
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#2dbefa',
    marginVertical: 20,
  },
});

// "babel-plugin-transform-decorators-legacy": "^1.3.5",

// "react-test-renderer": "17.0.1",

// "@types/react-test-renderer": "^17.0.1",
