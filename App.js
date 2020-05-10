/**
 * @author SM@K <smali.kazmi@hotmail.com>
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, SectionList } from 'react-native';

const DATA = [
  {
    title: '4th April, 2020',
    data: [
      'Message No. 0',
      'Message No. 1',
      'Message No. 2',
      'Message No. 3',
      'Message No. 4',
      'Message No. 5',
      'Message No. 6',
      'Message No. 7',
      'Message No. 8',
      'Message No. 9',
      'Message No. 10',
      'Message No. 11',
      'Message No. 12',
      'Message No. 13',
      'Message No. 14',
      'Message No. 15',
      'Message No. 16',
      'Message No. 17',
      'Message No. 18',
      'Message No. 19',
    ],
  },
  {
    title: '3rd April, 2020',
    data: [
      'Message No. 0',
      'Message No. 1',
      'Message No. 2',
      'Message No. 3',
      'Message No. 4',
      'Message No. 5',
      'Message No. 6',
      'Message No. 7',
      'Message No. 8',
      'Message No. 9',
      'Message No. 10',
      'Message No. 11',
      'Message No. 12',
      'Message No. 13',
      'Message No. 14',
      'Message No. 15',
      'Message No. 16',
      'Message No. 17',
      'Message No. 18',
      'Message No. 19',
    ],
  },
  {
    title: '2nd April, 2020',
    data: [
      'Message No. 0',
      'Message No. 1',
      'Message No. 2',
      'Message No. 3',
      'Message No. 4',
      'Message No. 5',
      'Message No. 6',
      'Message No. 7',
      'Message No. 8',
      'Message No. 9',
      'Message No. 10',
      'Message No. 11',
      'Message No. 12',
      'Message No. 13',
      'Message No. 14',
      'Message No. 15',
      'Message No. 16',
      'Message No. 17',
      'Message No. 18',
      'Message No. 19',
    ],
  },
  {
    title: '1st April, 2020',
    data: [
      'Message No. 0',
      'Message No. 1',
      'Message No. 2',
      'Message No. 3',
      'Message No. 4',
      'Message No. 5',
      'Message No. 6',
      'Message No. 7',
      'Message No. 8',
      'Message No. 9',
      'Message No. 0',
      'Message No. 1',
      'Message No. 2',
      'Message No. 3',
      'Message No. 4',
      'Message No. 5',
      'Message No. 6',
      'Message No. 7',
      'Message No. 8',
      'Message No. 9',
      'Message No. 10',
      'Message No. 11',
      'Message No. 12',
      'Message No. 13',
      'Message No. 14',
      'Message No. 15',
      'Message No. 16',
      'Message No. 17',
      'Message No. 18',
      'Message No. 19',
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {
  state = {
    currentDate: null,
  };

  updateStickyDate = ({ viewableItems, changed }) => {
    if (viewableItems && viewableItems.length) {
      const lastItem = viewableItems.pop();
      if (lastItem && lastItem.section) {
        this.setState({
          currentDate: lastItem.section.title,
        });
      }
    }
  };

  renderStickyDate = () => {
    const { currentDate } = this.state;
    return currentDate ? (
      <View style={styles.stickyDate}>
        <Text style={styles.stickyDateText}>{currentDate}</Text>
      </View>
    ) : null;
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          {this.renderStickyDate()}
          <SectionList
            sections={DATA}
            inverted={true}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionFooter={({ section: { title } }) => (
              <View style={styles.stickyDate}>
                <Text style={styles.stickyDateText}>{title}</Text>
              </View>
            )}
            onViewableItemsChanged={this.updateStickyDate}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
  },
  stickyDate: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
    marginBottom: 10,
  },
  stickyDateText: {
    color: '#000',
    padding: 5,
  },
});

export default App;
