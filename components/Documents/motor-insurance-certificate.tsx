"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: "10 20",
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addressBlock: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    width: "55%",
    fontWeight: "bold",
    height: 75,
  },
  logo: {
    width: 120,
    height: 90,
    objectFit: 'contain'
  },
  note: {
    textAlign: "center",
    fontSize: 10,
    marginVertical: 8,
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "dashed",
    marginVertical: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    // marginVertical: 8,
    marginBottom: 20,
  },
  mainBox: {
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 0,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  number: {
    width: 15,
  },
  content: {
    flex: 1,
  },
  twoColRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 60,
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  certification: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginBottom: 0,
    borderTopWidth: 0,
  },
  certRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  signatureBlock: {
    alignItems: "flex-start",
    marginRight: 50,
  },
  noteBox: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    marginBottom: 10,
    borderTopWidth: 0,
    fontSize: 9,
    lineHeight: 1.1
  },
  footer: {
    textAlign: "center",
    fontSize: 8,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
    width: "75%"
  },
  hotline: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  innsurencefont:{
    fontSize: 8,
    marginTop: 10,
  },
  hereby:{
     width: "60%"
  },
  certify:{
    fontSize: 9,
    marginBottom: 8,
  },
  authen:{
    marginTop: 10,
    fontSize: 10,
  },
  footernumber:{
    textAlign: "right",
    fontSize: 8,
  }
});

const MotorInsuranceCertificate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.addressBlock}>
          <Text>Uzzal Miah</Text>
          <Text>14 Lindsey Road</Text>
          <Text>Dagenham, Greater London</Text>
          <Text>RM8 2RP</Text>
        </View>
        <Image src="/logo2.png" style={styles.logo} />
      </View>

      <Text style={styles.note}>
        Please detach the certificate of insurance below and keep it in a safe
        place
      </Text>
      <View style={styles.dottedLine} />

      {/* title */}
      <Text style={styles.title}>CERTIFICATE OF MOTOR INSURANCE</Text>

      {/* main certificate box */}
      <View style={styles.mainBox}>
        {/* 1a */}
        <View style={styles.row}>
          <Text style={styles.number}>1.</Text>
          <View style={styles.content}>
            <View style={styles.twoColRow}>
              <Text>a) Registration mark of vehicle.</Text>
              <Text>
                Policy Number: <Text style={[styles.bold, styles.italic]}>TCV-MOT-44072540</Text>
              </Text>
            </View>
            <Text style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LF52BVB</Text>
          </View>
        </View>
        {/* 1b */}
        <View style={[styles.row, { marginLeft: 15, marginTop: 10, }]}>
          <Text style={styles.content}>
            b) Any vehicle supplied to the policyholder under an agreement
            between Ageas Insurance Limited and a repairer, whilst the vehicle
            shown in a) above is being repaired by that repairer as a direct
            result of damage covered by this policy, unless cover is provided by
            the repairer’s own insurance policy.
          </Text>
        </View>

        {/* 2 */}
        <View style={[styles.row]}>
          <Text style={styles.number}>2.</Text>
          <View style={styles.content}>
            <Text>Description of vehicle.</Text>
            <Text style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NISSAN MICRA TEMPEST</Text>
          </View>
        </View>

        {/* 3 */}
        <View style={[styles.row, {marginTop: 8,}]}>
          <Text style={styles.number}>3.</Text>
          <View style={styles.content}>
            <Text>Name of policyholder.</Text>
            <Text style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mr Uzzal Miah</Text>
          </View>
        </View>

        {/* 4 */}
        <View style={[styles.row, {marginTop: 8,}]}>
          <Text style={styles.number}>4.</Text>
          <View style={styles.content}>
            <Text>
              Effective date of commencement of insurance for the purposes of
              the relevant law.
            </Text>
            <Text  style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09 Jun 2025 15:35</Text>
          </View>
        </View>

        {/* 5 */}
        <View style={[styles.row, {marginTop: 8,}]}>
          <Text style={styles.number}>5.</Text>
          <View style={styles.content}>
            <Text>Date of expiry of insurance.</Text>
            <Text  style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09 Jun 2025 16:35</Text>
          </View>
        </View>

        {/* 6 */}
        <View style={[styles.row, {marginTop: 8,}]}>
          <Text style={styles.number}>6.</Text>
          <View style={styles.content}>
            <Text>Persons or classes of persons entitled to drive.</Text>
            <Text>
              Those specified below; provided that the person driving holds a
              licence to drive the vehicle or has held and is not disqualified
              from holding or obtaining such a licence.
            </Text>
            <Text  style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mr Uzzal Miah</Text>
          </View>
        </View>

        {/* 7 */}
        <View style={[styles.row, {marginTop: 8,}]}>
          <Text style={styles.number}>7.</Text>
          <View style={styles.content}>
            <Text>Limitations as to use subject to the exclusions below.</Text>
            <Text style={[styles.bold, styles.italic]}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Use for social Domestic and Pleasure purposes and use in person by
              the Policyholder in connection with their business or profession.
            </Text>
            <View style={styles.innsurencefont}>
              <Text style={{ marginTop: 5 }}>The insurance does not cover:</Text>
            <Text>• Use for racing, pacemaking, competition, rallies trials or speedtesting.</Text>
            <Text>
              • Use to secure the release of a motor vehicle, which has been
              seized by, or on behalf of, any Government or public authority.
            </Text>
            </View>
          </View>
        </View>
      </View>

      {/* certification */}
      <View style={styles.certification}>
        <View style={styles.certRow}>
          <View style={styles.hereby}>
            <Text style={styles.certify}>
                I hereby certify that the policy to which this certificate relates
                satisfies the requirements of the relevant law applicable in Great
                Britain, Northern Ireland, the Isle of Man, the Island of Guernsey,
                the Island of Jersey and the Island of Alderney
            </Text>
            <Text style={[styles.bold, { textAlign: 'center'}]}>TEMPCOVER LTD</Text>
            <Text style={[styles.authen]}>AUTHENTICATED as authorised agent on behalf of the Insurer</Text>
          </View>
          <View style={styles.signatureBlock}>
            <Text>Ageas Insurance Limited</Text>
            <Text>Authorised Insurers</Text>
            <Image src="/signature.png" style={{ width: 100, height: 40 }} />
            <Text>Ant Middle, CEO</Text>
            <Text>Ageas Insurance Limited</Text>
          </View>
        </View>
      </View>

      {/* note */}
      <View style={styles.noteBox}>
        <Text>
          NOTE: For full details of the insurance cover reference should be made
          to the policy.
        </Text>
        <Text>
          ADVICE TO THIRD PARTIES: Nothing contained in this certificate affects
          your right as a third party to make a claim.
        </Text>
        <Text>
          WARNING: This certificate has been prepared using a laser printer and
          is not valid if altered in any way.
        </Text>
      </View>

      {/* footer */}
      <Text style={styles.footer}>
        Registered office address: Ageas House, Hampshire Corporate Park,
        Templers Way, Eastleigh, Hampshire, SO53 3YA Registered in England and
        Wales No 354568
      </Text>
      <Text style={styles.footernumber}>127598.0.S</Text>
      <Text style={styles.hotline}>Claims Hotline: 0333 241 3392</Text>
    </Page>
  </Document>
);

export default MotorInsuranceCertificate;
