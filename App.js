import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconEntypo from "react-native-vector-icons/Entypo";
import icon from "./assets/santander.png";

export default function App() {
  const [visibleSaldo, setVisibleSaldo] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        {/* header */}
        <View style={styles.viewHeader}>
          <View style={styles.flexDirectionRow}>
            <TouchableOpacity style={styles.btnIconLeft}>
              <IconFontAwesome
                name={"bell-o"}
                size={16}
                style={styles.iconSino}
              />
            </TouchableOpacity>
            <View style={[styles.viewIconCenter, styles.flexDirectionRow]}>
              <Image source={icon} style={styles.iconSantander} />
              <Text style={styles.textSantander}>Santander</Text>
            </View>
            <TouchableOpacity style={styles.btnIconRigth}>
              <IconIonicons
                name={"ios-menu"}
                size={24}
                style={styles.iconSino}
              />
            </TouchableOpacity>
          </View>

          {/* text name anda conta */}
          <View style={styles.viewNomeConta}>
            <Text style={styles.textOlaNome}>Olá, Alex</Text>
            <Text style={styles.textAgCc}>Ag 1234 Cc 01020304-5</Text>
          </View>
        </View>

        {/* card notificacao */}
        <View style={styles.cardNotificacao}>
          <View style={[styles.flexDirectionRow, styles.viewCardNotificacao]}>
            <View style={styles.viewIconCardNotificacao}>
              <IconSimpleLineIcons
                name={"lock"}
                size={25}
                style={styles.iconCardNotificacao}
              />
            </View>
            <View style={styles.viewTextCardNotificacao}>
              <Text style={styles.textCardNotificacao}>
                Habilite o ID Santander e faça pagamentos e outras transações
                pelo app
              </Text>
            </View>
          </View>
        </View>

        {/* card saldo */}
        {visibleSaldo ? (
          <TouchableOpacity
            style={[styles.cardNotificacao, styles.cardSaldo]}
            onPress={() => setVisibleSaldo(!visibleSaldo)}
          >
            <View style={[styles.flexDirectionRow, styles.viewCardSaldo]}>
              <View style={styles.viewIconLeftCardSaldo}>
                <IconEntypo
                  name={"credit"}
                  size={18}
                  style={styles.iconLeftCardSaldo}
                />
              </View>

              <View style={styles.viewTextCardSaldo}>
                <Text style={styles.textCardSaldo}>Saldo disponível</Text>
              </View>

              <View style={styles.viewIconRigthCardSaldo}>
                <IconEntypo
                  name={"chevron-thin-down"} //chevron-thin-up
                  size={20}
                  style={styles.iconRigthCardSaldo}
                />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={[styles.cardNotificacao, styles.cardSaldo2]}>
            <TouchableOpacity
              style={[styles.cardSaldo, { marginTop: 0 }]}
              onPress={() => setVisibleSaldo(!visibleSaldo)}
            >
              <View style={[styles.flexDirectionRow, styles.viewCardSaldo]}>
                <View style={styles.viewIconLeftCardSaldo}>
                  <IconEntypo
                    name={"credit"}
                    size={18}
                    style={styles.iconLeftCardSaldo}
                  />
                </View>

                <View style={styles.viewTextCardSaldo}>
                  <Text style={styles.textCardSaldo}>Saldo disponível</Text>
                </View>

                <View style={styles.viewIconRigthCardSaldo}>
                  <IconEntypo
                    name={"chevron-thin-up"}
                    size={20}
                    style={styles.iconRigthCardSaldo}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.textSaldo}>R$ 120.900,97</Text>
            <Text style={styles.textSaldoLimite}>Saldo + Limite:</Text>
            <Text style={[styles.textSaldoLimite, styles.textValorSaldoLimite]}>
              R$ 250.000,00
            </Text>
            <View style={styles.divisao} />
            <TouchableOpacity onPress={() => {}} style={styles.btnVerExtrato}>
              <Text style={styles.textBtnVerExtrato}>Ver extrato</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* cardOpcoes */}
        <View style={[styles.flexDirectionRow, styles.cardOpcoes]}>
          {/*Pagar*/}
          <View style={styles.viewCardOpcoes}>
            <IconFontAwesome name={"home"} color={"red"} />
            <Text>Pagar</Text>
          </View>

          {/*Transferir*/}
          <View style={styles.viewCardOpcoes}></View>

          {/*Recarregar*/}
          <View style={styles.viewCardOpcoes}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ec0000",
    paddingTop: 24,
  },
  viewHeader: {
    backgroundColor: "#ec0000",
    height: 170,
  },
  scrollView: {
    backgroundColor: "white",
  },
  iconSantander: {
    right: 65,
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  textSantander: {
    marginTop: 5,
    right: 55,
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  iconSino: {
    color: "#F3F3F3",
    paddingTop: 8,
  },
  flexDirectionRow: {
    flexDirection: "row",
  },
  btnIconLeft: {
    flex: 1,
    alignSelf: "flex-start",
    paddingStart: 18,
  },
  viewIconCenter: {
    flex: 1,
    alignSelf: "center",
  },
  btnIconRigth: {
    alignSelf: "flex-end",
    paddingEnd: 18,
  },
  viewNomeConta: {
    paddingStart: 20,
    paddingTop: 30,
  },
  textOlaNome: {
    color: "#F3F3F3",
    fontSize: 18,
  },
  textAgCc: {
    paddingTop: 5,
    color: "#F3F3F3",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardNotificacao: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: -30,
    width: Dimensions.get("screen").width - 30,
    height: 120,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  viewCardNotificacao: {
    flex: 1,
    paddingStart: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  viewIconCardNotificacao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1.3,
    borderColor: "#ec0000",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCardNotificacao: {
    color: "#ec0000",
  },
  viewTextCardNotificacao: {
    flex: 1,
    height: 80,
    margin: 5,
    paddingTop: 12,
    marginStart: 10,
  },
  textCardNotificacao: {
    fontSize: 16,
    color: "#696969",
  },
  cardSaldo: {
    marginTop: 30,
    height: 50,
  },
  cardSaldo2: {
    marginTop: 30,
    height: 220,
  },
  viewCardSaldo: {
    flex: 1,
    paddingStart: 20,
    alignItems: "center",
  },
  viewIconLeftCardSaldo: {},
  iconLeftCardSaldo: {
    color: "#444",
  },
  viewTextCardSaldo: {
    paddingStart: 10,
  },
  textCardSaldo: {
    color: "#444",
    fontSize: 18,
    fontWeight: "500",
  },
  viewIconRigthCardSaldo: {
    flex: 1,
    alignItems: "flex-end",
    paddingEnd: 20,
  },
  textSaldo: {
    fontSize: 21,
    fontWeight: "bold",
    paddingStart: 20,
    paddingTop: 15,
  },
  textSaldoLimite: {
    fontSize: 17,
    color: "#444",
    fontWeight: "400",
    paddingStart: 21,
    paddingTop: 8,
  },
  textValorSaldoLimite: {
    fontSize: 15,
    paddingTop: 1,
    paddingStart: 22,
  },
  divisao: {
    marginTop: 35,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#b0b0b0",
    height: 0.5,
  },
  btnVerExtrato: {
    alignItems: "center",
    height: 40,
  },
  textBtnVerExtrato: {
    paddingTop: 15,
    fontSize: 16,
    color: "#ec0000",
  },
  cardOpcoes: {
    marginTop: 30,
    width: Dimensions.get("screen").width - 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  viewCardOpcoes: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 110,
    backgroundColor: "#444",
    margin: 5,
    flex: 1,
  },
});
