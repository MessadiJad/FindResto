import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp'

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const id = route.params.id

  const [result, setResult] = useState(null)
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}
      >
        <View><Text style={styles.tex_footer}>Back</Text></View>
      </TouchableOpacity>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.titleBar}>
        </View>
        <View style={styles.bannerImage}>
          <Image style={styles.imageBanner} source={{ uri: result.image_url }} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{result.name}</Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{result.categories[0].title}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{result.rating}</Text>
            <Text style={[styles.text, styles.subText]}>Rating</Text>
          </View>
          <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
            <Text style={[styles.text, { fontSize: 24 }]}>{result.display_phone}</Text>
            <Text style={[styles.text, styles.subText]}>Phone</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{result.review_count}</Text>
            <Text style={[styles.text, styles.subText]}>Reviews</Text>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              horizontal
              data={result.photos}
              keyExtractor={(photo) => photo}
              renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />}}/>
          </ScrollView>
        </View>
      </ScrollView>
      <Text style={[styles.subText, styles.recent]}>More details</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 250 }}>
            <Text style={[styles.text, { color: "#41444B", fontWeight: "900" }]}>
              Adresse: {" "}
              <Text style={{ fontWeight: "300" }}>
                {result.location.display_address}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.recentItem}>
          <View style={styles.recentItemIndicator}></View>
          <View style={{ width: 250 }}>
            <Text style={[styles.text, { color: "#41444B", fontWeight: "900" }]}>
              Transactions:{" "}
              <Text style={{ fontWeight: "400" }}>
                {result.transactions[0]} /<Text style={{ fontWeight: "400" }}> {result.transactions[1]}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: "#52575D"
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
  },
  imageBanner: {
    flex: 1,
    width: 500,
    height: 200,

  },
  image: {
    flex: 1,
    width: 250,
    height: 200,
    marginLeft: 15
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  bannerImage: {
    width: 500,
    height: 200,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#414448",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#414448",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    flex: 1,
    alignItems: "center"
  },
  mediaImageContainer: {
    width: 180,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#414448",
    position: "absolute",
    top: "62%",
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  },
  backButton: {
    marginLeft: 15,
    paddingTop: 0,
    width: 50,
    height: 20,
    fontSize: 15

  },
  tex_footer: {
    fontSize: 18,
  },
});

