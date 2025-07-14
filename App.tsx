import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// 16:9 비율 계산 (세로가 16 기준)
const aspectRatio = 16 / 9;
let boxHeight = screenHeight;
let boxWidth = boxHeight / aspectRatio;
if (boxWidth > screenWidth) {
  boxWidth = screenWidth;
  boxHeight = boxWidth * aspectRatio;
}

export default function App() {
  const [tab, setTab] = useState('홈');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.centerArea}>
        <View style={[styles.aspectBox, { width: boxWidth, height: boxHeight }]}> 
          {/* 상단 앱바 */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="information-circle-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>마이키우Me</Text>
            <View style={{ width: 24 }} />
          </View>
          {/* 콘텐츠 영역 */}
          <View style={styles.content}>
            {/* 카드 */}
            <View style={styles.card}>
              <View style={styles.row}>
                <Image source={require('./assets/키우미 배경없음.png')} style={styles.kiwoomiImg} resizeMode="contain" />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <View style={styles.levelRow}>
                    <Ionicons name="medal-outline" size={18} color="#FFD700" />
                    <Text style={styles.levelText}>Lv.04</Text>
                  </View>
                  <Text style={styles.cardTitle}>
                    나만의비서{"\n"}마이키우Me
                  </Text>
                  <Text style={styles.cardDesc}>#경제동향 #시장이슈</Text>
                </View>
              </View>
              {/* 입력창을 이미지와 바로 이어지게, 가로 전체로 */}
              <View style={styles.askRow}>
                <TouchableOpacity style={styles.askBtnFull}>
                  <Text style={styles.askTextFull}>마이키우Me에게 물어보세요</Text>
                  <Ionicons name="send" size={22} color="#5F2E90" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
              </View>
              <Text style={styles.notice}>마이키우Me의 답변은 생성형 AI를 활용한 답변으로 사실과 다를 수 있어요.</Text>
            </View>
            {/* 탭 메뉴 */}
            <View style={styles.tabRow}>
              <TouchableOpacity onPress={() => setTab('홈')}>
                <Text style={[styles.tab, tab === '홈' && styles.tabActive]}>홈</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTab('전체보기')}>
                <Text style={[styles.tab, tab === '전체보기' && styles.tabActive]}>전체보기</Text>
              </TouchableOpacity>
            </View>
            {/* 버블 차트 영역 (임시 원 배열) */}
            <View style={styles.bubbleArea}>
              <Text style={styles.bubbleTitle}>오늘 국내시장 주요 이슈 요약</Text>
              <View style={styles.bubbleRow}>
                <View style={[styles.bubble, { backgroundColor: '#E0C3F7', width: boxWidth * 0.22, height: boxWidth * 0.22 }]}><Text style={styles.bubbleText}>물류</Text></View>
                <View style={[styles.bubble, { backgroundColor: '#C3D7F7', width: boxWidth * 0.18, height: boxWidth * 0.18 }]}><Text style={styles.bubbleText}>보험</Text></View>
                <View style={[styles.bubble, { backgroundColor: '#F7C3E0', width: boxWidth * 0.20, height: boxWidth * 0.20 }]}><Text style={styles.bubbleText}>유통</Text></View>
                <View style={[styles.bubble, { backgroundColor: '#F7E0C3', width: boxWidth * 0.16, height: boxWidth * 0.16 }]}><Text style={styles.bubbleText}>면세점</Text></View>
              </View>
            </View>
          </View>
          {/* 하단 네비게이션 탭바 */}
          <View style={styles.bottomTab}>
            <TouchableOpacity style={styles.tabBtn} onPress={() => setTab('홈')}>
              <Ionicons name="home" size={24} color={tab === '홈' ? '#5F2E90' : '#BDBDBD'} />
              <Text style={[styles.tabLabel, tab === '홈' && { color: '#5F2E90' }]}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabBtn} onPress={() => setTab('전체보기')}>
              <MaterialIcons name="view-list" size={24} color={tab === '전체보기' ? '#5F2E90' : '#BDBDBD'} />
              <Text style={[styles.tabLabel, tab === '전체보기' && { color: '#5F2E90' }]}>전체보기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabBtn} onPress={() => setTab('설정')}>
              <Ionicons name="settings-outline" size={24} color={tab === '설정' ? '#5F2E90' : '#BDBDBD'} />
              <Text style={[styles.tabLabel, tab === '설정' && { color: '#5F2E90' }]}>설정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#5F2E90',
  },
  centerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aspectBox: {
    backgroundColor: '#5F2E90',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#5F2E90',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#F6F6FA',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 0,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  kiwoomiImg: {
    width: 90,
    height: 110,
    marginRight: 12,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  levelText: {
    color: '#FFD700',
    fontWeight: 'bold',
    marginLeft: 4,
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    lineHeight: 24,
  },
  cardDesc: {
    color: '#8A8A8A',
    fontSize: 13,
    marginTop: 2,
  },
  askRow: {
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center',
    width: '100%',
  },
  askBtnFull: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3EFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
  },
  askTextFull: {
    color: '#5F2E90',
    fontWeight: 'bold',
    fontSize: 17,
  },
  notice: {
    color: '#8A8A8A',
    fontSize: 11,
    marginTop: 10,
  },
  tabRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  tab: {
    fontSize: 17,
    color: '#BDBDBD',
    marginRight: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  tabActive: {
    color: '#5F2E90',
    borderBottomWidth: 2,
    borderBottomColor: '#5F2E90',
  },
  bubbleArea: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginHorizontal: 20,
    padding: 16,
    marginBottom: 16,
  },
  bubbleTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5F2E90',
    marginBottom: 10,
  },
  bubbleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  bubble: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bubbleText: {
    color: '#5F2E90',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 8,
  },
  tabBtn: {
    alignItems: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: '#BDBDBD',
    marginTop: 2,
    fontWeight: 'bold',
  },
});
