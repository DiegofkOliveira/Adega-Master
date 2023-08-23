import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  titulo: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 25
  },
  contatoLista: {
    alignItems: 'center'
  },
  contatoBox: {
    borderWidth: 1,
    padding: 20,
    justifyContent: 'center',
    width: 300,
    margin: 5,
    borderRadius: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderColor: '#BC8F8F'
  },
  contatoTitulo: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contatoParagrafo: {
    fontSize: 15
  },
  
});

export default estilos;