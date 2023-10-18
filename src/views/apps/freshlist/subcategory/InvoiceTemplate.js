// InvoiceTemplate.js
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Rect,
} from "@react-pdf/renderer";
import logo from "../../../../assets/img/logo/paravilogo.png";
import signature from "../../../../assets/img/logo/signature.png";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4",
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: "8px",
    marginTop: "1px",
    marginBottom: "2px",
  },
  GSTIN: {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "1px",
    marginBottom: "2px",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  customername: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 70,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    padding: 5,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    fontSize: 15,
  },
  tableAmount: {
    fontSize: "10px",
    fontWeight: "1000",
    marginLeft: "5px",
  },
});

const InvoiceTemplate = ({ tableList, invoiceData, CurrentWords }) => {
  const { items, customerName, date, total, place_supply } = invoiceData;
  const curentDate = new Date();
  console.log(invoiceData);

  let day = curentDate.getDate();
  let month = curentDate.getMonth() + 1;
  let year = curentDate.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View
              style={{
                flexDirection: "row",
                border: "1px solid black",
                height: "100px",
              }}
            >
              <Image
                style={{ width: "200px", padding: "25px 10px" }}
                src={logo}
                // style={styles.image}
              ></Image>
              <View style={{ padding: "10px" }}>
                <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                  PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                </Text>

                <Text
                  style={{
                    fontSize: "8px",
                    marginTop: "5px",
                    marginBottom: "2px",
                  }}
                >
                  ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                </Text>
                <Text style={styles.header}>
                  Guru Datta Mandir Road ,Gaurishankarwadi No. 1
                </Text>
                <Text style={styles.header}>
                  Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                </Text>
                <Text style={styles.header}>
                  Mumbai,Maharastra, 400075. india
                </Text>
                <Text style={styles.GSTIN}>GSTIN: 27AAHCP2196E1ZB</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "70px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt No.
                  </Text>
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    :{invoiceData?.order_id}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt Date.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    :{currentDate}
                    {/* {invoiceData?.delivery_date} */}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Term
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Due on Receipt
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Place of Supply
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : {place_supply}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#b4b6baad",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "20px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Bill To
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Ship to
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "90px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    {invoiceData?.billing_country}
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    {invoiceData?.billing_street},{invoiceData?.billing_city}
                    {invoiceData?.billing_state} ,{invoiceData?.company_name} ,
                    {invoiceData?.billing_pincode}
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    {invoiceData?.shipping_state}
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    {invoiceData?.shipping_street}
                    {invoiceData?.shipping_city} {invoiceData?.shipping_state} ,
                    {invoiceData?.shipping_pincode}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "50px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",
                      width: "90%",

                      // width: "50%",
                    }}
                  >
                    Client Code : &nbsp; {invoiceData?.supplier_name}
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",
                      width: "90%",
                    }}
                  >
                    User Code : &nbsp; {invoiceData?.display_code}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "black",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "23px",
              }}
            >
              <View
                style={{
                  width: "5%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  #
                </Text>
              </View>
              {/* <View
                style={{
                  width: "10%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  PO Number
                </Text>
              </View> */}
              <View
                style={{
                  width: "25%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",
                    color: "white",

                    marginLeft: "5px",
                  }}
                >
                  Item and Description
                </Text>
              </View>
              <View
                style={{
                  width: "22%",
                  padding: "5px 2px",
                  justifyContent: "center",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  HSN/SAC
                </Text>
              </View>
              <View
                style={{
                  width: "18%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  QTY
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Rate
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                {/* <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Discount(%)
                </Text> */}
              </View>
              <View
                style={{
                  // width: "15%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Amount
                </Text>
              </View>
            </View>
            {tableList &&
              tableList.map((ele, ind) => {
                return (
                  <>
                    <View
                      style={{
                        flexDirection: "row",

                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        borderLeft: "1px solid black",
                        height: "25px",
                      }}
                    >
                      <View
                        style={{
                          width: "5%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          {ind + 1}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "25%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text style={styles.tableAmount}>
                          {ele?.title}
                          {/* {invoiceData?.title} */}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "20%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",

                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          5124588
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "15%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",

                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          {ele?.qty}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "15%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          {ele?.price}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "15%",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          {/* {ele?.discountprice} */}
                        </Text>
                      </View>
                      <View
                        style={{
                          marginRight: "2px",
                          padding: "5px 2px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "10px",
                            fontWeight: "1000",
                            marginLeft: "5px",
                          }}
                        >
                          {ele?.qty * ele?.price}
                        </Text>
                      </View>
                    </View>
                    ;
                  </>
                );
              })}

            <View
              style={{
                flexDirection: "row",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  width: "55%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      // height: "40px",
                    }}
                  >
                    Total In Words
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "12px",
                      width: "95%",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    {CurrentWords}
                    {/* Seven Hundread Five and sixty five Rupees only. */}
                  </Text>{" "}
                </View>

                <View
                  style={{
                    margingTop: "550px",
                    marginBottom: "10px",
                    height: "190px",
                    justifyContent: "flex-end",
                    // borderBottom: "1px solid black",
                  }}
                >
                  <Text style={{ fontSize: "10px", marginTop: "15px" }}>
                    Terms and Conditions
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    1. Paid Amount/Payment are not refundable in any case.
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    2. Pay Payment under 30 days.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "45%",
                  height: "250px",
                }}
              >
                <View style={{ height: "200px" }}>
                  <View
                    style={{
                      padding: "10px",
                      height: "130px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Sub Total
                      </Text>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        {invoiceData?.total}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        CGST(0.00%)
                      </Text>
                      {/* <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        00.00
                      </Text> */}
                      <input type="number" placeholder="Enter CGST(12.00%)" />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        SGST(0.00%)
                      </Text>
                      {/* <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        00.00
                      </Text> */}
                      <input type="number" placeholder="Enter  SGST(12.00%)" />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Courier Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        {/* 307.00 */}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Other Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        {/* 307.00 */}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        Grand Total :
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        {invoiceData?.total}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ padding: "3px 3px ", height: "180px" }}>
                    <Text style={{ fontSize: "11px" }}> For</Text>
                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {" "}
                      PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>
                    <View>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={signature}
                      ></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: "2px",
                        marginTop: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: "10px" }}>
                        Authorized Signature
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceTemplate;
