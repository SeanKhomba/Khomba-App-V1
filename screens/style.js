/** @format */

import React, {
  StyleSheet,
  Platform,
  Dimensions,
  PixelRatio,
} from 'react-native'
import Color from '@common/Color'
import Constants from '@common/Constants'

const { width, height, scale } = Dimensions.get('window'),
  vw = width / 100,
  vh = height / 100,
  vmin = Math.min(vw, vh),
  vmax = Math.max(vw, vh)

export default StyleSheet.create({
  wrap: {
    marginTop: 0.05 * height,
    marginRight: 20,
    marginBottom: 4,
    marginLeft: 35,
    borderRadius: 8,
    height: vh * 60,
    flex: 1,
  },
  body: {
    borderRadius: 8,
    height: vh * 60,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 9)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  headerLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 10,
  },
  imageBack: {
    width: 18,
    height: 20,
    flex: 1,
  },
  wrapLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLogo: {
    color: 'rgba(72,194,172,1)',
    fontSize: 40,
  },
  wrapForm: {
    flex: 1,
    
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 1,
    position: 'relative',
  },
  textInput: {
    
    borderBottomWidth: 1,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 10,
    marginLeft: 0,
    borderBottomColor: 'rgba(229,229,229,0.8)',
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 4,
    fontSize: 15,
    color:'black',
  },
  pickerSelect: {
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 10,
    marginLeft: 0,
    borderBottomColor: 'rgba(229,229,229,1)',
    backgroundColor: '#F3F6F9',
    height: 40,
    width:160,
    borderRadius: 4,
    fontSize: 15,

  },
  textInputWrap: {
    marginTop: 10,
  },
  textLabel: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 8,
  },
  forgotPass: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    zIndex: 9999,
  },
  wrapButton: {
    flex: 1,
    marginTop: 30,
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 15,
    bottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogIn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(72,194,172)',
    paddingTop: 12,
    paddingRight: 40,
    paddingBottom: 12,
    paddingLeft: 40,
    marginBottom: 14,
    borderRadius: 25,
    width: width * 60 / 100,
  },
  btnLogInText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  orText: {
    color: 'rgb(51,51,51)',
    fontSize: 14,
    marginTop: 0,
    marginRight: 15,
    marginBottom: 0,
    marginLeft: 15,
  },
  forgotPassText: {
    color: '#555',
    textAlign: 'right',
    fontSize: 13,
  },
  underbtnLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogInFace: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(59,89,152)',
    paddingTop: 9,
    paddingRight: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    marginTop: 15,
    flexDirection: 'row',
  },
  bottomWrap: {
    flex: 1 / 2,
    position: 'relative',
  },
  bottomWrapContent: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    left: width / 4,
  },
  btnSignUpText: {
    color: 'rgb(72,194,172)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textHeading: {
   
  },
  checkBoxInput: {
   
  },
  textMessage: {

  },
})
