import {StyleSheet} from 'react-native';

export const CreateAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textInputContainer: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  inputHeaderText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#2dbefa',
    marginTop: 20,
  },
});
