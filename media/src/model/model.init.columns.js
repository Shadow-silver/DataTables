

/**
 * Column options that can be given to DataTables at initialisation time.
 *  @namespace
 */
DataTable.models.oInitColumns = {
	/**
	 * Allows a column's sorting to take multiple columns into account when 
	 * doing a sort. For example first name / last name columns make sense to 
	 * do a multi-column sort over the two columns.
	 *  @type array
	 *  @default [] <i>Takes the value of the column index automatically</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [
	 *          { "aDataSort": [ 0, 1 ], "aTargets": [ 0 ] },
	 *          { "aDataSort": [ 1, 0 ], "aTargets": [ 1 ] },
	 *          { "aDataSort": [ 2, 3, 4 ], "aTargets": [ 2 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [
	 *          { "aDataSort": [ 0, 1 ] },
	 *          { "aDataSort": [ 1, 0 ] },
	 *          { "aDataSort": [ 2, 3, 4 ] },
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"aDataSort": [],


	/**
	 * You can control the default sorting direction, and even alter the behaviour
	 * of the sort handler (i.e. only allow ascending sorting etc) using this
	 * parameter.
	 *  @type array
	 *  @default [ 'asc', 'desc' ]
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [
	 *          { "asSorting": [ "asc" ], "aTargets": [ 1 ] },
	 *          { "asSorting": [ "desc", "asc", "asc" ], "aTargets": [ 2 ] },
	 *          { "asSorting": [ "desc" ], "aTargets": [ 3 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [
	 *          null,
	 *          { "asSorting": [ "asc" ] },
	 *          { "asSorting": [ "desc", "asc", "asc" ] },
	 *          { "asSorting": [ "desc" ] },
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"asSorting": [ 'asc', 'desc' ],


	/**
	 * Enable or disable filtering on the data in this column.
	 *  @type boolean
	 *  @default true
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "bSearchable": false, "aTargets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "bSearchable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bSearchable": true,


	/**
	 * Enable or disable sorting on this column.
	 *  @type boolean
	 *  @default true
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "bSortable": false, "aTargets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "bSortable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bSortable": true,


	/**
	 * When using fnRender() for a column, you may wish to use the original data
	 * (before rendering) for sorting and filtering (the default is to used the
	 * rendered data that the user can see). This may be useful for dates etc.
	 *  @type boolean
	 *  @default true
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          {
	 *            "fnRender": function ( oObj ) {
	 *              return oObj.aData[0] +' '+ oObj.aData[3];
	 *            },
	 *            "bUseRendered": false,
	 *            "aTargets": [ 0 ]
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          {
	 *            "fnRender": function ( oObj ) {
	 *              return oObj.aData[0] +' '+ oObj.aData[3];
	 *            },
	 *            "bUseRendered": false
	 *          },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"bUseRendered": true,


	/**
	 * Enable or disable the display of this column.
	 *  @type boolean
	 *  @default true
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "bVisible": false, "aTargets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "bVisible": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */
	"bVisible": true,


	/**
	 * Custom display function that will be called for the display of each cell in
	 * this column.
	 *  @type function
	 *  @param {object} o Object with the following parameters:
	 *  @param {int}    o.iDataRow The row in aoData
	 *  @param {int}    o.iDataColumn The column in question
	 *  @param {array   o.aData The data for the row in question
	 *  @param {object} o.oSettings The settings object for this DataTables instance
	 *  @returns {string} The string you which to use in the display
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          {
	 *            "fnRender": function ( o ) {
	 *              return o.aData[0] +' '+ o.aData[3];
	 *            },
	 *            "aTargets": [ 0 ]
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "fnRender": function ( o ) {
	 *            return o.aData[0] +' '+ o.aData[3];
	 *          } },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"fnRender": null,


	/**
	 * The column index (starting from 0!) that you wish a sort to be performed
	 * upon when this column is selected for sorting. This can be used for sorting
	 * on hidden columns for example.
	 *  @type int
	 *  @default -1 <i>Use automatically calculated column index</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "iDataSort": 1, "aTargets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "iDataSort": 1 },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"iDataSort": -1,


	/**
	 * This property can be used to read data from any JSON data source property,
	 * including deeply nested objects / properties. By default DataTables will
	 * use an array index (incrementally increased for each column) as the data
	 * source, but a string can be used for this property which will read an
	 * object property from the data source, a function which will be given the
	 * data source object to render into a string or null where the cell will be
	 * treated as empty. For more information see
	 * http://datatables.net/blog/Extended_data_source_options_with_DataTables
	 *  @type string|int|function|null
	 *  @default -1 <i>Use automatically calculated column index</i>
	 * 
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable( {
	 *        "sAjaxSource": "sources/deep.txt",
	 *        "aoColumns": [
	 *          { "mDataProp": "engine" },
	 *          { "mDataProp": "browser" },
	 *          { "mDataProp": "platform.inner" },
	 *          { "mDataProp": "platform.details.0" },
	 *          { "mDataProp": "platform.details.1" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"mDataProp": -1,


	/**
	 * Class to give to each cell in this column.
	 *  @type string
	 *  @default <i>Empty string</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "sClass": "my_class", "aTargets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "sClass": "my_class" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sClass": "",


	/**
	 * Allows a default value to be given for a column's data, and will be used
	 * whenever a null data source is encountered (this can be because mDataProp
	 * is set to null, or because the data source itself is null).
	 *  @type string
	 *  @default null
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          {
	 *            "mDataProp": null,
	 *            "sDefaultContent": "Edit",
	 *            "aTargets": [ -1 ]
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          null,
	 *          null,
	 *          null,
	 *          {
	 *            "mDataProp": null,
	 *            "sDefaultContent": "Edit"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sDefaultContent": null,


	/**
	 * This parameter is only used in DataTables' server-side processing. It can
	 * be exceptionally useful to know what columns are being displayed on the
	 * client side, and to map these to database fields. When defined, the names
	 * also allow DataTables to reorder information from the server if it comes
	 * back in an unexpected order (i.e. if you switch your columns around on the
	 * client-side, your server-side code does not also need updating).
	 *  @type string
	 *  @default <i>Empty string</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "sName": "engine", "aTargets": [ 0 ] },
	 *          { "sName": "browser", "aTargets": [ 1 ] },
	 *          { "sName": "platform", "aTargets": [ 2 ] },
	 *          { "sName": "version", "aTargets": [ 3 ] },
	 *          { "sName": "grade", "aTargets": [ 4 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "sName": "engine" },
	 *          { "sName": "browser" },
	 *          { "sName": "platform" },
	 *          { "sName": "version" },
	 *          { "sName": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sName": "",


	/**
	 * Defines a data source type for the sorting which can be used to read
	 * realtime information from the table (updating the internally cached
	 * version) prior to sorting. This allows sorting to occur on user editable
	 * elements such as form inputs.
	 *  @type string
	 *  @default std
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [
	 *          { "sSortDataType": "dom-text", "aTargets": [ 2, 3 ] },
	 *          { "sType": "numeric", "aTargets": [ 3 ] },
	 *          { "sSortDataType": "dom-select", "aTargets": [ 4 ] },
	 *          { "sSortDataType": "dom-checkbox", "aTargets": [ 5 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [
	 *          null,
	 *          null,
	 *          { "sSortDataType": "dom-text" },
	 *          { "sSortDataType": "dom-text", "sType": "numeric" },
	 *          { "sSortDataType": "dom-select" },
	 *          { "sSortDataType": "dom-checkbox" }
	 *        ]
	 *      } );
	 *    } );
	 */
	"sSortDataType": "std",


	/**
	 * The title of this column.
	 *  @type string
	 *  @default null <i>Derived from the 'TH' value for this column in the 
	 *    original HTML table.</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "sTitle": "My column title", "aTargets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "sTitle": "My column title" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sTitle": null,


	/**
	 * The type allows you to specify how the data for this column will be sorted.
	 * Four types (string, numeric, date and html (which will strip HTML tags
	 * before sorting)) are currently available. Note that only date formats
	 * understood by Javascript's Date() object will be accepted as type date. For
	 * example: "Mar 26, 2008 5:03 PM". May take the values: 'string', 'numeric',
	 * 'date' or 'html' (by default). Further types can be adding through
	 * plug-ins.
	 *  @type string
	 *  @default null <i>Auto-detected from raw data</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "sType": "html", "aTargets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "sType": "html" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sType": null,


	/**
	 * Defining the width of the column, this parameter may take any CSS value
	 * (3em, 20px etc). DataTables applys 'smart' widths to columns which have not
	 * been given a specific width through this interface ensuring that the table
	 * remains readable.
	 *  @type string
	 *  @default null <i>Automatic</i>
	 * 
	 *  @example
	 *    // Using aoColumnDefs
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumnDefs": [ 
	 *          { "sWidth": "20%", "aTargets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *    
	 *  @example
	 *    // Using aoColumns
	 *    $(document).ready(function() {
	 *      $('#example').dataTable( {
	 *        "aoColumns": [ 
	 *          { "sWidth": "20%" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */
	"sWidth": null
};
