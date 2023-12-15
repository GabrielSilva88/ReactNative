import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrese: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracaso.'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }
  render() {
    return (
      <View style={styles.conteiner}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>
          {this.state.textoFrese}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar Biscoito
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;
/*
<============================================= /////// ===============================>
/*    12. ENTENDENDO STATES 
    **antes render**   
constructor(props) {
    super(props);
    this.state = {
      nome: 'Gabriel'
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }
<============================================================ /////// ===============================>
      ** Pos render ***
      <View style={{ marginTop: 20, }}>

        <Button title="Entrar" onPress={() => this.entrar('Silva Miguel')} />

        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>
          Òla, Mundo! {this.state.nome}
        </Text>

      </View>
<============================================================ /////// ===============================>
      ** 15.APLICANDO GRUPO DE ESTILO **
      obs: inserir StyleSheet no import  
      import { View, Text, =>StyleSheet<= } from "react-native";
   <View style={styles.conteiner}>

        <Text style={[styles.textoMain, styles.alinhaTexto]}> Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}> Eu sou texto 2</Text>
        <Text> Eu sou texto 3</Text>
        <Text style={styles.textoMain}> Eu sou texto 4</Text>

      </View>

      const styles = StyleSheet.create({
  conteiner:{
    marginTop: 100

  },
  textoMain:{
    fontSize: 25,
    color: '#3f00ff'
  },
  alinhaTexto: {
    textAlign: "center",
  }
})
<============================================================ /////// ===============================>

    **** 16.TAMANHOS DINAMICOS E FIXOS ****
      <View style={{flex:1, backgroundColor:'#222'}}>
          <View style={{height:30, backgroundColor:'red'}}></View>
          <View style={{flex:4, backgroundColor:'green'}}></View>
          <View style={{flex:6, backgroundColor:'yellow'}}></View>

      </View>
    );
<============================================================ /////// ===============================>
    ****** 19. RECEBENDO DADOS *****
          constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {

      this.setState({
        nome: 'Bem Vindo: ' + texto
      });
    } else {
        this.setState({nome: ''});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Digite seu Nome?"
          underlineColorAndroid={'transparent'}
          onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
})
<============================================================ /////// ===============================>
/**  21 - APP BISCOITO DA SORTE
 * 
 * 
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrese: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracaso.'
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }
  render() {
    return (
      <View style={styles.conteiner}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>
          {this.state.textoFrese}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar Biscoito
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})

export default App;

 * 
 *  */

