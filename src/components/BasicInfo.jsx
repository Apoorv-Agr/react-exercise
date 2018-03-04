const React = require('react');
const createReactClass = require('create-react-class');

var BasicInfo = createReactClass({
  render: function(){
    var boxStyleObj = {
      borderRadius:4,
      border:'1px solid #d9d9d9'
    };
    var textColorObj ={
      color : '#b3b3b3'
    };
    var digitStyleObj = {
      color:'#000000',
      fontWeight : 'bold'
    };
    var lastBoxBackColor = {
      backgroundColor : '#ff6600',
      borderRadius:4,
      border:'1px solid #ff6600'
    };
    var lastBocTextColor = {
        color : '#ffffff'
    };
    var lastBoxTextFont = {
        color : '#ffffff',
        fontWeight : 'bold'
    };
    var midSecHeightStyle = {
      height : '11pc'
    };
    var panelBodyColor = {
      backgroundColor : '#404040'
    };
    var panelNumStyle = {
        color : '#ffffff',
        fontSize: '18px'
    };
    var panelLabelTextColor = {
      color : '#a6a6a6',
      fontSize: '12px'
    };
    var textAlignCenter = {
      textAlign : 'center'
    };
    var panelHeadingStyle={
      backgroundColor : '#ff3385',
      borderColor : '#ff3385',
      height : '11pc'
    };
    var rhsPanelBodyStyle = {
        backgroundColor : '#ffffff',
        height: '50px'
    };
    var rhsPanelBorderStyle = {
      borderColor : '#e6e6e6'
    };
    var rhsPanelHeadingColorOne ={
      backgroundColor:'#ff4dff',
      borderColor : '#e6e6e6',
      'color':'#ffffff'
    };
    var rhsPanelHeadingColorTwo ={
      backgroundColor:'#ff0000',
      borderColor : '#e6e6e6',
      'color':'#ffffff'
    };
    var rhsPanelHeadingColorThree ={
      backgroundColor:'#00ff00',
      borderColor : '#e6e6e6',
      'color':'#ffffff'
    };
    var rhsPanelFontStyle={
      fontWeight : 'bold',
      'fontSize' : '17px'
    };
    var rhsPanelFontStyleOne={
      'fontSize' : '12px'
    };
    return(
      <div>
        <div className="row">
          <div className = "col-sm-3">
            <div className="panel panel-defalut" style={boxStyleObj}>
              <div className="panel-heading">
                <h3 className = "panel-title" style = {digitStyleObj}>20</h3>
              </div>
              <div className="panel-body" style={textColorObj}>
                New followers added this month
              </div>
            </div>
          </div>
          <div className = "col-sm-3">
            <div className="panel panel-defalut" style={boxStyleObj}>
              <div className="panel-heading">
                <h3 className = "panel-title" style = {digitStyleObj}>$ 1250</h3>
              </div>
              <div className="panel-body" style={textColorObj}>
                Average Monthly income
              </div>
            </div>
          </div>
          <div className = "col-sm-3">
            <div className="panel panel-defalut" style={boxStyleObj}>
              <div className="panel-heading">
                <h3 className = "panel-title" style = {digitStyleObj}>$ 13865</h3>
              </div>
              <div className="panel-body" style={textColorObj}>
                Yearly income Goal
              </div>
            </div>
          </div>
          <div className = "col-sm-3">
            <div className="panel panel-defalut" style={lastBoxBackColor}>
                <div className="panel-heading">
                  <h3 className = "col-sm-offset-4 panel-title" style = {lastBoxTextFont}>18 <sup>o</sup></h3>
                </div>
                <div className="col-sm-offset-3 panel-body" style={lastBocTextColor}>
                  Paris
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <div className ="panel panel-primary">
              <div className ="panel-heading" style = {midSecHeightStyle}>
              </div>
              <div className ="panel-body" style={panelBodyColor}>
                <div className="row">
                  <div className="col-sm-2 col-sm-offset-1" style={textAlignCenter}>
                    <div style={panelNumStyle}>15080</div>
                    <div style={panelLabelTextColor}>Shot Views</div>
                  </div>
                  <div className="col-sm-2 col-sm-offset-2" style={textAlignCenter}>
                    <div style={panelNumStyle}>12000</div>
                    <div style={panelLabelTextColor}>Likes</div>
                  </div>
                  <div className="col-sm-2 col-sm-offset-2" style={textAlignCenter}>
                    <div style={panelNumStyle}>5100</div>
                    <div style={panelLabelTextColor}>Comments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hidden-xs col-sm-3">
            <div className ="panel panel-primary" style={rhsPanelBorderStyle}>
              <div className ="panel-heading">
                <div style={rhsPanelFontStyleOne}>New visitors</div>
                <div style={rhsPanelFontStyle}>1.5k</div>
              </div>
              <div className ="panel-body" style={rhsPanelBodyStyle}></div>
            </div>
          </div>
          <div className="row hidden-xs col-sm-3">
            <div className ="panel" style={rhsPanelHeadingColorOne}>
              <div className ="panel-heading">
                <div style={rhsPanelFontStyleOne}>Bonus Rate</div>
                <div style={rhsPanelFontStyle}>50%</div>
              </div>
              <div className ="panel-body" style={rhsPanelBodyStyle}></div>
            </div>
          </div>
        </div>
        <div className="row hidden-xs">
          <div className="col-sm-9">
            <div className ="panel">
              <div className ="panel-heading" style = {panelHeadingStyle}>
              </div>
              <div className ="panel-body" style={panelBodyColor}>
                <div className="row">
                  <div className="col-sm-2 col-sm-offset-1" style={textAlignCenter}>
                    <div style={panelNumStyle}>15080</div>
                    <div style={panelLabelTextColor}>Shot Views</div>
                  </div>
                  <div className="col-sm-2 col-sm-offset-2" style={textAlignCenter}>
                    <div style={panelNumStyle}>12000</div>
                    <div style={panelLabelTextColor}>Likes</div>
                  </div>
                  <div className="col-sm-2 col-sm-offset-2" style={textAlignCenter}>
                    <div style={panelNumStyle}>5100</div>
                    <div style={panelLabelTextColor}>Comments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hidden-xs col-sm-3">
            <div className ="panel" style={rhsPanelHeadingColorTwo}>
              <div className ="panel-heading">
                <div style={rhsPanelFontStyleOne}>Searches</div>
                <div style={rhsPanelFontStyle}>28%</div>
              </div>
              <div className ="panel-body" style={rhsPanelBodyStyle}></div>
            </div>
          </div>
          <div className="row hidden-xs col-sm-3">
            <div className ="panel" style={rhsPanelHeadingColorThree}>
              <div className ="panel-heading">
                <div style={rhsPanelFontStyleOne}>Traffic</div>
                <div style={rhsPanelFontStyle}>140.5 kb</div>
              </div>
              <div className ="panel-body" style={rhsPanelBodyStyle}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasicInfo;
