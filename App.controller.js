sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("sync.zeb.zebpp020.controller.App", {
        onInit: function() {

          // var oZEBPP = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZEB_PP_020_SRV_01/", true);
          //       oModel.read("/ZEB_PP_020", {
          //           success: function(oResult, response) {
          //               if(oResult.results.length > 0) {
          //               }      
          //             } 
          // });     
          // this.getView().setModel(oZEBPP);

          var oModel = new JSONModel({
            
            "years": [
              {
                "key": "2025"
              },
              {
                "key": "2024"
              },
              {
                "key": "2023"
              },
              {
                "key": "2022"
              },
              {
                "key": "2021"
              }
            ],
            "productItems": [
              {
                "title": "FIN-BLEND-001",
                "subtitle": "하우스 블랜드 홀빈",
                "revenue": "27.25K EUR",
                "status": "success",
                "statusSchema": "Success"
              },
              {
                "title": "FIN-CAPSULE-001",
                "subtitle": "하우스 캡슐 커피",
                "revenue": "7.35K EUR",
                "status": "exceeded",
                "statusSchema": "Error"
              },
              {
                "title": "FIN-DRIP-001",
                "subtitle": "베트남 아라비카 드립백",
                "revenue": "22.89K EUR",
                "status": "warning",
                "statusSchema": "Warning"
              }
            ]
          });
          this.getView().setModel(oModel);
    
          // Use smaller margin around grid when on smaller screens
          var oGrid = this.getView().byId("Grid");
          oGrid.attachLayoutChange(function (oEvent) {
            var sLayout = oEvent.getParameter("layout");
    
            if (sLayout === "layoutXS" || sLayout === "layoutS") {
              oGrid.removeStyleClass("sapUiSmallMargin");
              oGrid.addStyleClass("sapUiTinyMargin");
            } else {
              oGrid.removeStyleClass("sapUiTinyMargin");
              oGrid.addStyleClass("sapUiSmallMargin");
            }
          });
        },        
        onSnapToRowChange: function (oEvent) {
          this.getView().byId("Grid").setSnapToRow(oEvent.getParameter("state"));
        },
        onAllowDenseFillChange: function (oEvent) {
          this.getView().byId("Grid").setAllowDenseFill(oEvent.getParameter("state"));
        },
        onInlineBlockLayoutChange: function (oEvent) {
          this.getView().byId("Grid").setInlineBlockLayout(oEvent.getParameter("state"));
        }
    });
  });

  