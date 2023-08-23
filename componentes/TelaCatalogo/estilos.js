import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerScroll: {
    
  },
  titulo: {
   fontSize: 40,
   fontWeight: 'bold',
   margin: 20
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'left',
    margin: 20
  },
  cardVinho: {
    backgroundColor: '#BC8F8F',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 150,
    borderRadius: 10,
    margin: 20
  },
  vinhoImg: {
    width: 35,
    margin: 20
  },
  cardBoxDescricao: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginEnd: 90
  },
  cardDescricao: {
    fontSize: 12,
    textAlign: 'justify',
    margin: 20,
    color: 'white'
  },
});

export default estilos;