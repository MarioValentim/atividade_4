import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { supabase } from './conexao'

export default function App() {
  const [produtoDigitado, setProdutoDigitado] = useState("");
  const [valorDigitado, setValorDigitado] = useState("");
  const [quantidadeDigitada, setQuantidadeDigitada] = useState("");
  const [dados, setDados] = useState([]);

  const cadastrarCompras = async() =>{
    const {error} = await supabase.from("tb_lista_compras")
    .insert({coluna_produto: produtoDigitado, 
             coluna_valor: valorDigitado,
             coluna_quantidade: quantidadeDigitada})
    if(error){
        alert("Falha ao cadastrar!"+error.message)
    }else{
        alert("Cadastrado com sucesso!")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15}}>
        Cadastro de compras
      </Text>
      <TextInput
          onChangeText={(texto)=>setProdutoDigitado(texto)}
          placeholder='Digite o produto'
          style={styles.caixaTexto} />
      <TextInput
          onChangeText={(texto)=>setValorDigitado(texto)}
          placeholder='Digite o valor'
          style={styles.caixaTexto} />
      <TextInput
          onChangeText={(texto)=>setQuantidadeDigitada(texto)}
          placeholder='Digite a quantidade'
          style={styles.caixaTexto} />
      <Button
      title="Cadastrar"
      onPress={()=>cadastrarCompras()} />

      <ScrollView>
        {dados.map((item)=>(
            <View style={styles.cxCompras}>
                <Text> PRODUTO: {item.coluna_produto}   </Text>
                <Text> PREÇO: {item.coluna_preço} </Text>
                <Text> QUANTIDADE: {item.coluna_quantidade}       </Text>
            </View>
         )      
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  cxCompras:{
    borderWidth: 1,
    borderRadius: 8,
    minWidth: 300,
    padding: 10
  },
  caixaTexto:{
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#c5c5c56",
    padding: 4,
    borderRadius: 4,
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#11300f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
