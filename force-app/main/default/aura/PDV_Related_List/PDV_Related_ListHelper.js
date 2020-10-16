({   
    setRelatedId : function(component,event, helper){
        //console.log("1.Current Record ID: " + component.get("v.recordId"));
        //console.log("2.Related Field Name: " + component.get("v.Related_Record_ID"));
        var fieldName = "v.simpleRecord." + component.get("v.Related_Record_ID");
        //console.log("3.FieldName: " + fieldName);
        //console.log("4.RelatedField's value: " + component.get(fieldName));
    	component.set("v.relatedRecordId", component.get(fieldName));
        //console.log("5.Related Record ID: " + component.get("v.relatedRecordId"));
    }
})