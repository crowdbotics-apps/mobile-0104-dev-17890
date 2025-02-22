import React, { Component } from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { styles } from "./styles";
import { connect } from "react-redux";
import { article_list } from "./store/actions";

class ArticleList extends Component {
  componentDidMount() {
    console.log("Load")
    this.props.load();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate(this.props.detail, { id: item.id })
      }}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.text}>
            {item.title}
          </Text>
          <Text style={styles.author}>
            {item.author}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  render() {
    const { articles } = this.props;
    return (
      <FlatList
        data={articles}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.id}`}
      />
    );

  }
}

const mapStateToProps = (state, ownProps) => {
  const detail = ownProps.navigation.getParam("detail", "Article");
  console.log(state)
  return {
    detail: detail,
    articles: state.articlesReducer.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(article_list())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)