//
//  ContentView.swift
//  L3 Demo 2
//
//  Created by 김승찬의 M1 mac air on 2023/03/13.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        
        ZStack{
            Color(.systemMint)
                .ignoresSafeArea()
            
            VStack(alignment: .leading, spacing: 20.0){//수직으로 나열, 스텍을 왼쪽으로 정렬, 수직 스페이스를 20
                
                
                Image("niagarafalls")
                    .resizable()//이미지 사이즈를 조정 할 수 있는 기본 함수
                    .aspectRatio(contentMode: .fit)//이미지 사이즈를 알아서 맞게 만들기
                    .cornerRadius(15)//이미지를 둥글게
                
                HStack{ //스텍을 수평으로 나열
                    
                    Text("나이아가라 폭포")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                    
                    Spacer()//스페이스를 주어 양쪽으로 붙임
                    
                    VStack{
                        
                        HStack{
                            Image(systemName: "star.fill")//sf 심볼에서 이름 가져옴
                                .foregroundColor(.orange)//주황색으로 변환
                                .font(.caption)//폰트는 caption으로
                            Image(systemName: "star.fill")
                                .foregroundColor(.orange)
                                .font(.caption)
                            Image(systemName: "star.fill")
                                .foregroundColor(.orange)
                                .font(.caption)
                            Image(systemName: "star.fill")
                                .foregroundColor(.orange)
                                .font(.caption)
                            Image(systemName: "star.leadinghalf.filled")//반 개 별 이미지
                                .foregroundColor(.orange)
                                .font(.caption)
                        }
                        
                        Text("리뷰 361")
                            .foregroundColor(.orange)
                            .font(.caption)
                    }
                    
                }
                
                Text("평생 살면서 꼭 경험해 봐야하는 장소입니다.")
                
                HStack{
                    Spacer()//스페이스를 주어 왼쪽면으로 밀기
                    Image(systemName: "fork.knife")
                    Image(systemName: "binoculars.fill")
                }
                .foregroundColor(.gray)
                .font(.caption)
            }//옵션과 커맨드를 화살표을 이용해 빠르게 펴고 접을 수 있음
            .padding()//vstsck 기준으로 패딩
            .background(Rectangle()
                .foregroundColor(.white)
                .cornerRadius(15)
                .shadow(radius: 15))
            //vstack 배경화면에 사각형을 추가 후 색깔변경, 코너 라운드 15, 그림자 추가 15
            .padding()//사이드 바를 기준으로 패딩
        }
    }
    
    struct ContentView_Previews: PreviewProvider {
        static var previews: some View {
            ContentView()
        }
    }
}
