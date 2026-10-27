/**
 * Registro SED – Luz Del Sur
 * Lógica de la aplicación
 */

/* ==========================================================
   DATOS SED (clave: código SED, valor: alimentador)
   ========================================================== */
const SED = {"00837S":{"alim":"A01"},"00676S":{"alim":"A10"},"00283S":{"alim":"LS10"},"00379S":{"alim":"A13"},"01275S":{"alim":"A25"},"01975S":{"alim":"A22"},"00972S":{"alim":"A16"},"01981S":{"alim":"A18"},"01595S":{"alim":"A11"},"00804S":{"alim":"A02"},"01128S":{"alim":"A23"},"00767S":{"alim":"IG13"},"01260S":{"alim":"IG12"},"00670S":{"alim":"A07"},"00946S":{"alim":"A21"},"00816S":{"alim":"IG14"},"01155S":{"alim":"B22"},"01156S":{"alim":"B22"},"00965S":{"alim":"B11"},"01703S":{"alim":"B23"},"00202S":{"alim":"B21"},"00071S":{"alim":"B13"},"00221S":{"alim":"U22"},"01629S":{"alim":"B18"},"00067S":{"alim":"B05"},"00222S":{"alim":"B06"},"00081S":{"alim":"B07"},"01001S":{"alim":"B08"},"01215S":{"alim":"BB02"},"00596S":{"alim":"C01"},"00630S":{"alim":"C10"},"01909S":{"alim":"CE10"},"00789S":{"alim":"C03"},"00623S":{"alim":"CE08"},"00383S":{"alim":"C15"},"00903S":{"alim":"C16"},"01646S":{"alim":"C17"},"00266S":{"alim":"C18"},"01408S":{"alim":"C19"},"00407S":{"alim":"C02"},"00356S":{"alim":"C05"},"00702S":{"alim":"C21"},"01006S":{"alim":"C06"},"01022S":{"alim":"C07"},"00599S":{"alim":"C09"},"01288S":{"alim":"SL07"},"00768S":{"alim":"CH01"},"01952S":{"alim":"CH02"},"00811S":{"alim":"CH03"},"01835S":{"alim":"CH13"},"01480S":{"alim":"CH05"},"01239S":{"alim":"CH22"},"01427S":{"alim":"CH21"},"01959S":{"alim":"CH04"},"00457S":{"alim":"G01"},"00586S":{"alim":"G10"},"00030S":{"alim":"G13"},"00814S":{"alim":"G14"},"00278S":{"alim":"G15"},"00132S":{"alim":"G16"},"00162S":{"alim":"G18"},"01109S":{"alim":"G19"},"01436S":{"alim":"G02"},"00352S":{"alim":"G20"},"00169S":{"alim":"G21"},"00021S":{"alim":"G22"},"01033S":{"alim":"G03"},"00157S":{"alim":"G05"},"00031S":{"alim":"G10"},"00147S":{"alim":"G09"},"01550S":{"alim":"HP02"},"01419S":{"alim":"HP07"},"01855S":{"alim":"SC11"},"00863S":{"alim":"HP10"},"01797S":{"alim":"L03"},"00889S":{"alim":"L03"},"01856S":{"alim":"MA42"},"01370S":{"alim":"L04"},"01162S":{"alim":"PA04"},"01683S":{"alim":"PR11"},"00458S":{"alim":"MO11"},"01171S":{"alim":"MO12"},"01960S":{"alim":"MO25"},"00671S":{"alim":"MO14"},"01441S":{"alim":"MO24"},"01268S":{"alim":"NA02"},"01755S":{"alim":"NA01"},"00945S":{"alim":"PA07"},"01295S":{"alim":"PA04"},"00940S":{"alim":"PA02"},"00536S":{"alim":"PL06"},"01917S":{"alim":"IG11"},"01059S":{"alim":"PL03"},"01995S":{"alim":"PL02"},"01946S":{"alim":"PL05"},"01306S":{"alim":"PL05"},"00981S":{"alim":"PL06"},"01847S":{"alim":"MO25"},"01414S":{"alim":"MA41"},"01349S":{"alim":"PR12"},"01587S":{"alim":"PR12"},"00839S":{"alim":"S01"},"01411S":{"alim":"S04"},"00849S":{"alim":"S02"},"00845S":{"alim":"S04"},"01859S":{"alim":"CL23"},"01438S":{"alim":"CL11"},"01843S":{"alim":"SA14"},"01838S":{"alim":"PT03"},"01822S":{"alim":"PT03"},"00800S":{"alim":"VT03"},"01546S":{"alim":"SC11"},"00910S":{"alim":"SC11"},"01385S":{"alim":"SC20"},"00133S":{"alim":"SI10"},"00320S":{"alim":"CE10"},"00392S":{"alim":"SI12"},"00113S":{"alim":"SI14"},"01861S":{"alim":"SI09"},"00310S":{"alim":"CE09"},"00482S":{"alim":"SI17"},"00349S":{"alim":"SI07"},"01205S":{"alim":"SI19"},"01969S":{"alim":"SI19"},"00337S":{"alim":"SI20"},"00904S":{"alim":"CE09"},"01373S":{"alim":"SI21"},"01312S":{"alim":"SI04"},"00317S":{"alim":"SI06"},"01898S":{"alim":"SI05"},"00146S":{"alim":"SI03"},"01357S":{"alim":"PG09"},"01346S":{"alim":"B21"},"01333S":{"alim":"PG01"},"01430S":{"alim":"SJ06"},"01966S":{"alim":"SL16"},"01300S":{"alim":"SL11"},"00971S":{"alim":"SL14"},"00759S":{"alim":"SL15"},"00727S":{"alim":"SL17"},"00490S":{"alim":"SL03"},"00303S":{"alim":"SL03"},"00744S":{"alim":"LU04"},"00351S":{"alim":"SL05"},"00751S":{"alim":"SL12"},"00728S":{"alim":"SL08"},"01289S":{"alim":"SR01"},"01726S":{"alim":"SR01"},"01361S":{"alim":"SR08"},"01653S":{"alim":"SR09"},"00256S":{"alim":"ST12"},"01551S":{"alim":"ST14"},"01978S":{"alim":"ST15"},"01725S":{"alim":"IG15"},"01169S":{"alim":"IG12"},"00209S":{"alim":"CE01"},"00348S":{"alim":"U10"},"00072S":{"alim":"U12"},"01170S":{"alim":"CE05"},"00251S":{"alim":"U14"},"01964S":{"alim":"U23"},"00554S":{"alim":"CE05"},"00425S":{"alim":"U16"},"00284S":{"alim":"U17"},"00621S":{"alim":"CE02"},"00518S":{"alim":"Z20"},"00376S":{"alim":"CE03"},"00220S":{"alim":"U22"},"00380S":{"alim":"U02"},"00193S":{"alim":"U24"},"00883S":{"alim":"U03"},"00247S":{"alim":"U19"},"00795S":{"alim":"U23"},"00063S":{"alim":"U06"},"00405S":{"alim":"U07"},"00342S":{"alim":"U08"},"00064S":{"alim":"U08"},"00487S":{"alim":"PG06"},"00985S":{"alim":"VM33"},"00643S":{"alim":"SJ07"},"00602S":{"alim":"VM19"},"01282S":{"alim":"VM21"},"00968S":{"alim":"PT04"},"01645S":{"alim":"VM26"},"00601S":{"alim":"SJ05"},"00741S":{"alim":"VM31"},"01281S":{"alim":"VM19"},"00499S":{"alim":"Z01"},"01041S":{"alim":"Z01"},"00790S":{"alim":"Z22"},"01047S":{"alim":"Z11"},"01121S":{"alim":"Z18"},"00696S":{"alim":"Z14"},"00473S":{"alim":"Z15"},"00672S":{"alim":"Z16"},"01366S":{"alim":"Z16"},"00994S":{"alim":"Z10"},"00561S":{"alim":"Z14"},"00537S":{"alim":"Z19"},"01313S":{"alim":"Z12"},"01098S":{"alim":"Z21"},"01292S":{"alim":"Z21"},"01574S":{"alim":"Z12"},"01194S":{"alim":"Z09"},"01086S":{"alim":"Z06"},"01016S":{"alim":"Z07"},"00213S":{"alim":"CE02"},"00439S":{"alim":"Z08"},"01452S":{"alim":"ST24"},"01460S":{"alim":"SL15"},"01463S":{"alim":"IG21"},"01470S":{"alim":"SL13"},"01476S":{"alim":"HP04"},"01504S":{"alim":"PR23"},"01600S":{"alim":"BB01"},"01359S":{"alim":"SI07"},"01515S":{"alim":"BJ22"},"01522S":{"alim":"CH23"},"01523S":{"alim":"HP21"},"01566S":{"alim":"C42"},"01572S":{"alim":"HP21"},"01580S":{"alim":"C42"},"01581S":{"alim":"MO22"},"01602S":{"alim":"SC23"},"01611S":{"alim":"IG22"},"01643S":{"alim":"L21"},"01665S":{"alim":"C41"},"1384BS":{"alim":"SC22"},"01668S":{"alim":"CL21"},"01684S":{"alim":"L22"},"01719S":{"alim":"CE01"},"80001S":{"alim":"TE01"},"01742S":{"alim":"SC23"},"01746S":{"alim":"MO24"},"01778S":{"alim":"G04"},"01757S":{"alim":"C41"},"00229S":{"alim":"CÑ03"},"01718S":{"alim":"PR25"},"01794S":{"alim":"C42"},"01807S":{"alim":"U41"},"01820S":{"alim":"CE22"},"01815S":{"alim":"U41"},"01850S":{"alim":"HP21"},"01853S":{"alim":"MO22"},"01879S":{"alim":"CE21"},"01882S":{"alim":"VT41"},"01890S":{"alim":"MO23"},"01907S":{"alim":"MO24"},"01933S":{"alim":"MI42"},"01938S":{"alim":"S42"},"01962S":{"alim":"CH22"},"01982S":{"alim":"B04"},"01973S":{"alim":"AP42"},"01988S":{"alim":"U03"},"01483S":{"alim":"CL23"},"1383BS":{"alim":"SC13"},"01258S":{"alim":"AP41"},"00852S":{"alim":"A01"},"00933S":{"alim":"A20"},"00578S":{"alim":"LS10"},"01618S":{"alim":"A13"},"01274S":{"alim":"A14"},"01593S":{"alim":"A16"},"00475S":{"alim":"A17"},"01744S":{"alim":"A18"},"01864S":{"alim":"A11"},"01537S":{"alim":"A08"},"01943S":{"alim":"A23"},"01273S":{"alim":"A05"},"01863S":{"alim":"A19"},"01656S":{"alim":"A07"},"00474S":{"alim":"A21"},"00974S":{"alim":"IG14"},"01321S":{"alim":"U22"},"01956S":{"alim":"B22"},"01710S":{"alim":"B11"},"01101S":{"alim":"B12"},"00466S":{"alim":"B13"},"00187S":{"alim":"B02"},"00562S":{"alim":"B02"},"01222S":{"alim":"B18"},"01112S":{"alim":"B05"},"00312S":{"alim":"B06"},"00070S":{"alim":"B07"},"00915S":{"alim":"B08"},"00698S":{"alim":"C01"},"00842S":{"alim":"C01"},"01401S":{"alim":"C04"},"01369S":{"alim":"CE07"},"00381S":{"alim":"C20"},"01832S":{"alim":"C14"},"01305S":{"alim":"C14"},"01771S":{"alim":"C16"},"01406S":{"alim":"C17"},"01066S":{"alim":"C18"},"00459S":{"alim":"C02"},"00406S":{"alim":"C18"},"00269S":{"alim":"LU06"},"00270S":{"alim":"LU06"},"01164S":{"alim":"C06"},"01007S":{"alim":"C07"},"01141S":{"alim":"C09"},"01745S":{"alim":"SL07"},"01950S":{"alim":"CH02"},"00705S":{"alim":"CH03"},"01261S":{"alim":"CH03"},"00632S":{"alim":"CH03"},"01469S":{"alim":"CH22"},"01365S":{"alim":"CH12"},"01368S":{"alim":"CH21"},"00812S":{"alim":"ST21"},"01032S":{"alim":"G01"},"00131S":{"alim":"G11"},"00329S":{"alim":"G13"},"00155S":{"alim":"G14"},"00453S":{"alim":"G16"},"00291S":{"alim":"G18"},"00036S":{"alim":"G18"},"01429S":{"alim":"G12"},"00454S":{"alim":"G02"},"00049S":{"alim":"G20"},"00117S":{"alim":"G21"},"00127S":{"alim":"G22"},"00089S":{"alim":"G01"},"00300S":{"alim":"G07"},"01031S":{"alim":"G03"},"00978S":{"alim":"LU02"},"01663S":{"alim":"HP03"},"01831S":{"alim":"HP01"},"01559S":{"alim":"HP07"},"01830S":{"alim":"HP04"},"01379S":{"alim":"L05"},"01354S":{"alim":"L02"},"01997S":{"alim":"L01"},"01913S":{"alim":"L04"},"01784S":{"alim":"VT03"},"01431S":{"alim":"L23"},"00491S":{"alim":"MO12"},"00714S":{"alim":"MO12"},"00563S":{"alim":"MO14"},"01091S":{"alim":"Z11"},"01711S":{"alim":"NA08"},"01394S":{"alim":"NA02"},"01635S":{"alim":"NA03"},"01445S":{"alim":"NA09"},"01203S":{"alim":"PA08"},"00941S":{"alim":"PA01"},"01304S":{"alim":"PA09"},"01317S":{"alim":"PL01"},"01052S":{"alim":"PL03"},"00663S":{"alim":"PL03"},"01145S":{"alim":"PL04"},"00404S":{"alim":"PL05"},"00558S":{"alim":"PL05"},"01624S":{"alim":"PL10"},"01478S":{"alim":"MA02"},"01413S":{"alim":"MA02"},"01389S":{"alim":"PR12"},"01403S":{"alim":"PR21"},"01770S":{"alim":"S02"},"00848S":{"alim":"S02"},"00900S":{"alim":"S04"},"01210S":{"alim":"S03"},"01768S":{"alim":"CL12"},"01439S":{"alim":"CL11"},"01844S":{"alim":"SA14"},"01839S":{"alim":"SA13"},"01821S":{"alim":"PT03"},"01294S":{"alim":"VT03"},"00928S":{"alim":"SC11"},"01560S":{"alim":"SC22"},"01416S":{"alim":"SC21"},"00888S":{"alim":"SI10"},"00051S":{"alim":"SI10"},"01386S":{"alim":"CE10"},"00153S":{"alim":"SI12"},"00884S":{"alim":"SI14"},"01481S":{"alim":"SI09"},"00336S":{"alim":"CE09"},"00869S":{"alim":"SI07"},"00906S":{"alim":"SI07"},"00167S":{"alim":"SI19"},"01374S":{"alim":"SI02"},"00206S":{"alim":"SI20"},"01371S":{"alim":"SI21"},"01376S":{"alim":"SI21"},"00056S":{"alim":"SI04"},"00418S":{"alim":"SI06"},"01899S":{"alim":"SI05"},"01672S":{"alim":"SJ01"},"00531S":{"alim":"PG08"},"01945S":{"alim":"SJ04"},"00506S":{"alim":"PG01"},"01616S":{"alim":"SJ09"},"00982S":{"alim":"LS13"},"01301S":{"alim":"SL11"},"01097S":{"alim":"SL14"},"01053S":{"alim":"SL16"},"01185S":{"alim":"SL02"},"00305S":{"alim":"SL03"},"00302S":{"alim":"LU06"},"00308S":{"alim":"LU04"},"00894S":{"alim":"SL05"},"00752S":{"alim":"SL12"},"00600S":{"alim":"SL09"},"01631S":{"alim":"SR01"},"01637S":{"alim":"SR05"},"01038S":{"alim":"SU03"},"01420S":{"alim":"ST16"},"01998S":{"alim":"ST12"},"01761S":{"alim":"ST13"},"00866S":{"alim":"ST15"},"01894S":{"alim":"IG11"},"01188S":{"alim":"IG11"},"00834S":{"alim":"CE01"},"01077S":{"alim":"U10"},"00136S":{"alim":"B14"},"01722S":{"alim":"CE05"},"00065S":{"alim":"U14"},"00412S":{"alim":"U05"},"00555S":{"alim":"CE04"},"00334S":{"alim":"U16"},"00232S":{"alim":"U17"},"01028S":{"alim":"U19"},"00078S":{"alim":"U20"},"00367S":{"alim":"CE03"},"00912S":{"alim":"U02"},"01064S":{"alim":"U20"},"00077S":{"alim":"U03"},"01409S":{"alim":"U15"},"00184S":{"alim":"U19"},"01789S":{"alim":"U15"},"01021S":{"alim":"U06"},"00074S":{"alim":"U07"},"00073S":{"alim":"U08"},"00830S":{"alim":"U08"},"00469S":{"alim":"PG04"},"01116S":{"alim":"VM32"},"00644S":{"alim":"SJ07"},"00642S":{"alim":"PG03"},"01626S":{"alim":"VM21"},"01810S":{"alim":"PT04"},"01197S":{"alim":"PT02"},"01586S":{"alim":"VM27"},"00740S":{"alim":"PG05"},"01796S":{"alim":"VM20"},"00538S":{"alim":"Z01"},"01298S":{"alim":"Z01"},"00687S":{"alim":"C10"},"00697S":{"alim":"Z11"},"00471S":{"alim":"Z15"},"01248S":{"alim":"Z14"},"00995S":{"alim":"Z15"},"00583S":{"alim":"Z16"},"00508S":{"alim":"Z16"},"01666S":{"alim":"Z10"},"01071S":{"alim":"Z13"},"00879S":{"alim":"Z19"},"01315S":{"alim":"Z12"},"01228S":{"alim":"Z21"},"01613S":{"alim":"Z21"},"00796S":{"alim":"Z09"},"01195S":{"alim":"Z09"},"01085S":{"alim":"Z06"},"00762S":{"alim":"Z07"},"00622S":{"alim":"CE08"},"00797S":{"alim":"Z02"},"01454S":{"alim":"LU05"},"01461S":{"alim":"ST21"},"01466S":{"alim":"MO25"},"01472S":{"alim":"VT42"},"01487S":{"alim":"S02"},"01525S":{"alim":"MO25"},"01540S":{"alim":"G17"},"1394BS":{"alim":"NA02"},"01520S":{"alim":"HP22"},"01541S":{"alim":"L21"},"01555S":{"alim":"MO23"},"01567S":{"alim":"MO23"},"01577S":{"alim":"CE22"},"01582S":{"alim":"IG15"},"01598S":{"alim":"PR23"},"01609S":{"alim":"PR26"},"01620S":{"alim":"SI22"},"01630S":{"alim":"AP43"},"01657S":{"alim":"C42"},"01678S":{"alim":"HP24"},"01677S":{"alim":"SC22"},"01709S":{"alim":"SI21"},"01705S":{"alim":"CL22"},"01673S":{"alim":"MO23"},"01723S":{"alim":"MO22"},"01754S":{"alim":"C41"},"01769S":{"alim":"PR24"},"01766S":{"alim":"C42"},"05050S":{"alim":"CÑ05"},"01799S":{"alim":"CE21"},"01792S":{"alim":"MO22"},"01801S":{"alim":"HP21"},"01819S":{"alim":"U41"},"01827S":{"alim":"SI22"},"01804S":{"alim":"L23"},"01867S":{"alim":"CE22"},"01880S":{"alim":"AP42"},"01885S":{"alim":"ST22"},"01858S":{"alim":"PR27"},"01908S":{"alim":"SL14"},"01935S":{"alim":"CH22"},"01948S":{"alim":"MO24"},"01949S":{"alim":"U41"},"01965S":{"alim":"AP42"},"01970S":{"alim":"AP42"},"01989S":{"alim":"U41"},"01318S":{"alim":"CL21"},"01291S":{"alim":"CL23"},"01265S":{"alim":"CL24"},"01262S":{"alim":"AP45"},"00542S":{"alim":"A10"},"00411S":{"alim":"LS07"},"01874S":{"alim":"LS10"},"01332S":{"alim":"A04"},"01422S":{"alim":"A15"},"01679S":{"alim":"A16"},"00774S":{"alim":"LS08"},"01249S":{"alim":"IG14"},"01325S":{"alim":"A04"},"01027S":{"alim":"IG14"},"01026S":{"alim":"IG13"},"01872S":{"alim":"A05"},"01897S":{"alim":"A19"},"01442S":{"alim":"LS09"},"01279S":{"alim":"A09"},"00189S":{"alim":"B01"},"00911S":{"alim":"U22"},"00448S":{"alim":"B11"},"00145S":{"alim":"B23"},"01752S":{"alim":"B12"},"00208S":{"alim":"B13"},"00314S":{"alim":"B02"},"00414S":{"alim":"B03"},"00172S":{"alim":"B04"},"00360S":{"alim":"B05"},"00523S":{"alim":"B06"},"00914S":{"alim":"B08"},"00917S":{"alim":"B21"},"01017S":{"alim":"C01"},"00617S":{"alim":"C10"},"01425S":{"alim":"CE07"},"00618S":{"alim":"C03"},"00273S":{"alim":"C13"},"00477S":{"alim":"CE06"},"01144S":{"alim":"CE10"},"00265S":{"alim":"C17"},"01532S":{"alim":"C17"},"01531S":{"alim":"C18"},"00331S":{"alim":"C02"},"00582S":{"alim":"C05"},"00708S":{"alim":"C21"},"00382S":{"alim":"C21"},"01163S":{"alim":"SL05"},"01093S":{"alim":"C07"},"00690S":{"alim":"SL07"},"00771S":{"alim":"CH01"},"01736S":{"alim":"CH02"},"01686S":{"alim":"CH03"},"00706S":{"alim":"CH11"},"00525S":{"alim":"CH03"},"01834S":{"alim":"SJ09"},"01129S":{"alim":"CH12"},"01570S":{"alim":"CH04"},"01039S":{"alim":"ST21"},"00023S":{"alim":"G01"},"00979S":{"alim":"G11"},"00661S":{"alim":"G15"},"00052S":{"alim":"G16"},"00161S":{"alim":"G18"},"00823S":{"alim":"G19"},"00301S":{"alim":"G19"},"00322S":{"alim":"G02"},"00170S":{"alim":"G21"},"01103S":{"alim":"G22"},"01435S":{"alim":"G01"},"00043S":{"alim":"G05"},"00028S":{"alim":"G10"},"00194S":{"alim":"G09"},"01380S":{"alim":"HP10"},"01049S":{"alim":"HP01"},"01944S":{"alim":"HP07"},"01503S":{"alim":"SR01"},"01418S":{"alim":"L22"},"01857S":{"alim":"L01"},"00820S":{"alim":"L03"},"00827S":{"alim":"L05"},"01549S":{"alim":"L05"},"00862S":{"alim":"MO11"},"00481S":{"alim":"MO12"},"01264S":{"alim":"MO25"},"01137S":{"alim":"MO14"},"01395S":{"alim":"MO13"},"01824S":{"alim":"SC13"},"01303S":{"alim":"NA01"},"01619S":{"alim":"NA06"},"01012S":{"alim":"PA03"},"01297S":{"alim":"PA04"},"01655S":{"alim":"PA01"},"00535S":{"alim":"PL01"},"00510S":{"alim":"PL02"},"00667S":{"alim":"PL03"},"00665S":{"alim":"PL02"},"01151S":{"alim":"PL04"},"01045S":{"alim":"PL05"},"00807S":{"alim":"PL03"},"01266S":{"alim":"PL07"},"01911S":{"alim":"MA41"},"01548S":{"alim":"PR11"},"01391S":{"alim":"PR12"},"00843S":{"alim":"S01"},"01412S":{"alim":"S04"},"01774S":{"alim":"CL12"},"01095S":{"alim":"S04"},"01212S":{"alim":"CL23"},"01437S":{"alim":"CL11"},"01533S":{"alim":"SA16"},"01837S":{"alim":"SA16"},"01841S":{"alim":"SA13"},"00786S":{"alim":"VT03"},"01400S":{"alim":"SC10"},"01787S":{"alim":"SC11"},"01767S":{"alim":"SC13"},"00854S":{"alim":"SC22"},"00850S":{"alim":"SI10"},"00115S":{"alim":"SI01"},"00324S":{"alim":"SI12"},"00154S":{"alim":"G19"},"01860S":{"alim":"SI09"},"00271S":{"alim":"CE09"},"01749S":{"alim":"SI17"},"01293S":{"alim":"SI07"},"00465S":{"alim":"CE09"},"00289S":{"alim":"SI19"},"00824S":{"alim":"SI20"},"00204S":{"alim":"SI20"},"01372S":{"alim":"SI21"},"01399S":{"alim":"SI21"},"00055S":{"alim":"SI06"},"00296S":{"alim":"SI05"},"00188S":{"alim":"SI03"},"01417S":{"alim":"VT41"},"00426S":{"alim":"B21"},"01040S":{"alim":"PG07"},"01808S":{"alim":"SJ09"},"01186S":{"alim":"LS13"},"01189S":{"alim":"SL11"},"00633S":{"alim":"SL11"},"00760S":{"alim":"LS11"},"00773S":{"alim":"SL17"},"00624S":{"alim":"SL02"},"01350S":{"alim":"SL03"},"00307S":{"alim":"LU04"},"01102S":{"alim":"SL05"},"01528S":{"alim":"SL12"},"00729S":{"alim":"SL08"},"01543S":{"alim":"LS09"},"01453S":{"alim":"SR01"},"01360S":{"alim":"SR08"},"01654S":{"alim":"SR09"},"01800S":{"alim":"ST12"},"01999S":{"alim":"ST12"},"01700S":{"alim":"ST13"},"00840S":{"alim":"IG15"},"01168S":{"alim":"IG12"},"00141S":{"alim":"U01"},"01493S":{"alim":"U10"},"01426S":{"alim":"U12"},"00361S":{"alim":"U13"},"00186S":{"alim":"U13"},"00895S":{"alim":"U14"},"00964S":{"alim":"CE05"},"00389S":{"alim":"U16"},"00452S":{"alim":"U16"},"00313S":{"alim":"U18"},"00277S":{"alim":"Z20"},"00434S":{"alim":"CE03"},"01490S":{"alim":"U22"},"01910S":{"alim":"U02"},"00183S":{"alim":"U24"},"00967S":{"alim":"U03"},"00142S":{"alim":"U19"},"00226S":{"alim":"U23"},"00062S":{"alim":"U06"},"01806S":{"alim":"U07"},"01120S":{"alim":"U06"},"01004S":{"alim":"U08"},"00488S":{"alim":"VM29"},"00984S":{"alim":"VM22"},"00647S":{"alim":"VM23"},"00650S":{"alim":"VM24"},"00828S":{"alim":"PG02"},"01339S":{"alim":"PT01"},"00653S":{"alim":"VM26"},"00646S":{"alim":"VM27"},"01977S":{"alim":"PG06"},"01649S":{"alim":"Z01"},"00557S":{"alim":"Z01"},"00791S":{"alim":"Z22"},"00988S":{"alim":"Z11"},"00387S":{"alim":"Z18"},"00472S":{"alim":"Z14"},"01724S":{"alim":"Z15"},"00421S":{"alim":"Z08"},"00549S":{"alim":"Z16"},"01396S":{"alim":"Z10"},"00559S":{"alim":"Z13"},"01024S":{"alim":"Z19"},"01314S":{"alim":"Z19"},"00801S":{"alim":"Z41"},"01309S":{"alim":"Z21"},"01706S":{"alim":"Z09"},"01920S":{"alim":"Z09"},"01530S":{"alim":"Z06"},"00787S":{"alim":"Z06"},"00620S":{"alim":"CE02"},"00438S":{"alim":"Z02"},"01444S":{"alim":"HP21"},"01458S":{"alim":"BJ21"},"01455S":{"alim":"NA08"},"01468S":{"alim":"G09"},"01474S":{"alim":"PR26"},"01433S":{"alim":"PR21"},"01508S":{"alim":"MO13"},"01423S":{"alim":"MO25"},"01506S":{"alim":"IG23"},"01524S":{"alim":"CH23"},"01554S":{"alim":"SI22"},"01564S":{"alim":"CE22"},"01575S":{"alim":"SC20"},"01579S":{"alim":"MO14"},"01588S":{"alim":"U20"},"01604S":{"alim":"SI22"},"01607S":{"alim":"MO22"},"01628S":{"alim":"HP22"},"01636S":{"alim":"A42"},"1388BS":{"alim":"NA03"},"01669S":{"alim":"A41"},"01693S":{"alim":"MO23"},"01695S":{"alim":"CL23"},"01727S":{"alim":"CE21"},"01743S":{"alim":"HP23"},"01750S":{"alim":"U41"},"01756S":{"alim":"G19"},"01739S":{"alim":"HP07"},"01051S":{"alim":"CÑ01"},"04010S":{"alim":"CÑ21"},"01795S":{"alim":"Z14"},"01791S":{"alim":"CL23"},"01816S":{"alim":"SI21"},"01818S":{"alim":"SI21"},"01848S":{"alim":"CE22"},"01852S":{"alim":"SI22"},"01876S":{"alim":"C41"},"01877S":{"alim":"AP41"},"01889S":{"alim":"MO23"},"01803S":{"alim":"Z41"},"01924S":{"alim":"MI42"},"01939S":{"alim":"S41"},"01915S":{"alim":"Z41"},"01974S":{"alim":"CE21"},"01972S":{"alim":"AP42"},"01902S":{"alim":"CL22"},"01992S":{"alim":"ST22"},"01307S":{"alim":"U41"},"01263S":{"alim":"MO23"},"01271S":{"alim":"SC21"},"01927S":{"alim":"MI41"},"01928S":{"alim":"MI41"},"01931S":{"alim":"MI41"},"01384S":{"alim":"SC22"},"01383S":{"alim":"SC13"},"01388S":{"alim":"NA02"},"01214S":{"alim":"VM30"},"01958S":{"alim":"CL24"},"01231S":{"alim":"CL23"},"01225S":{"alim":"Z41"},"00844S":{"alim":"LS07"},"00409S":{"alim":"A12"},"00878S":{"alim":"A06"},"01286S":{"alim":"A16"},"00973S":{"alim":"A16"},"01348S":{"alim":"A03"},"00785S":{"alim":"A02"},"00999S":{"alim":"A08"},"00743S":{"alim":"A23"},"01638S":{"alim":"IG13"},"01259S":{"alim":"A19"},"00913S":{"alim":"A07"},"01592S":{"alim":"A22"},"00552S":{"alim":"A09"},"00847S":{"alim":"B22"},"00826S":{"alim":"B22"},"00511S":{"alim":"B11"},"01451S":{"alim":"B23"},"00148S":{"alim":"B21"},"01491S":{"alim":"B13"},"00503S":{"alim":"B02"},"00540S":{"alim":"B21"},"00079S":{"alim":"B04"},"00236S":{"alim":"B05"},"00068S":{"alim":"B07"},"00934S":{"alim":"B08"},"00935S":{"alim":"B08"},"01166S":{"alim":"C01"},"01246S":{"alim":"C08"},"01037S":{"alim":"CE07"},"00619S":{"alim":"C03"},"01527S":{"alim":"CE06"},"00556S":{"alim":"CE04"},"01809S":{"alim":"CE10"},"00362S":{"alim":"C17"},"00335S":{"alim":"C18"},"00547S":{"alim":"C19"},"00297S":{"alim":"C02"},"01067S":{"alim":"C05"},"00896S":{"alim":"C21"},"01984S":{"alim":"LU02"},"01216S":{"alim":"SL05"},"00560S":{"alim":"C08"},"00688S":{"alim":"SL07"},"00769S":{"alim":"CH01"},"01951S":{"alim":"CH02"},"00041S":{"alim":"CH03"},"00707S":{"alim":"CH11"},"01465S":{"alim":"CH05"},"00753S":{"alim":"SJ09"},"00909S":{"alim":"CH12"},"01283S":{"alim":"CH04"},"00029S":{"alim":"G01"},"00436S":{"alim":"G10"},"00433S":{"alim":"G13"},"00323S":{"alim":"C02"},"00823S":{"alim":"G19"},"00301S":{"alim":"G19"},"00322S":{"alim":"G02"},"01829S":{"alim":"HP22"},"01008S":{"alim":"SC11"},"01634S":{"alim":"ST21"},"01381S":{"alim":"L21"},"01347S":{"alim":"L01"},"01428S":{"alim":"L03"},"01449S":{"alim":"L05"},"01805S":{"alim":"L05"},"00922S":{"alim":"MO11"},"00480S":{"alim":"MO12"},"01606S":{"alim":"MO13"},"01356S":{"alim":"MO14"},"01994S":{"alim":"MO13"},"01793S":{"alim":"NA05"},"01174S":{"alim":"NA04"},"01603S":{"alim":"NA03"},"01798S":{"alim":"NA06"},"01202S":{"alim":"PA08"},"01448S":{"alim":"PA01"},"00809S":{"alim":"PL01"},"00588S":{"alim":"PL02"},"01050S":{"alim":"PL03"},"00664S":{"alim":"PL03"},"01846S":{"alim":"PL04"},"00456S":{"alim":"PL05"},"00808S":{"alim":"PL06"},"01968S":{"alim":"PL06"},"01402S":{"alim":"MA41"},"01547S":{"alim":"PR12"},"01390S":{"alim":"PR12"},"01404S":{"alim":"PR21"},"01405S":{"alim":"S04"},"01494S":{"alim":"CL12"},"01440S":{"alim":"S04"},"01209S":{"alim":"CL23"},"01211S":{"alim":"CL23"},"01842S":{"alim":"SA15"},"01845S":{"alim":"SA14"},"01840S":{"alim":"SA13"},"01104S":{"alim":"SA18"},"01230S":{"alim":"SA20"},"01057S":{"alim":"SC11"},"01765S":{"alim":"HP07"},"01446S":{"alim":"SC22"},"01485S":{"alim":"SI10"},"01397S":{"alim":"SI10"},"01556S":{"alim":"CE10"},"00058S":{"alim":"SI12"},"00462S":{"alim":"CE01"},"00333S":{"alim":"SI13"},"00140S":{"alim":"SI17"},"01311S":{"alim":"SI07"},"00415S":{"alim":"SI07"},"01873S":{"alim":"SI19"},"00200S":{"alim":"SI02"},"00397S":{"alim":"SI20"},"01410S":{"alim":"SI21"},"01387S":{"alim":"SI21"},"00288S":{"alim":"SI04"},"00175S":{"alim":"SI06"},"00059S":{"alim":"SI03"},"01087S":{"alim":"SJ01"},"00530S":{"alim":"B21"},"01327S":{"alim":"PG07"},"00645S":{"alim":"SJ05"},"00597S":{"alim":"SL01"},"01930S":{"alim":"LS12"},"01299S":{"alim":"SL07"},"01364S":{"alim":"SL15"},"00936S":{"alim":"SL17"},"00460S":{"alim":"SL02"},"00304S":{"alim":"SL03"},"00306S":{"alim":"LU03"},"00589S":{"alim":"SL05"},"01302S":{"alim":"SL07"},"00689S":{"alim":"SL12"},"00846S":{"alim":"SL09"},"01632S":{"alim":"SR01"},"01790S":{"alim":"SR05"},"01601S":{"alim":"SR09"},"01869S":{"alim":"ST16"},"02000S":{"alim":"ST11"},"01172S":{"alim":"ST13"},"01375S":{"alim":"ST21"},"01160S":{"alim":"IG12"},"01893S":{"alim":"IG11"},"00201S":{"alim":"U01"},"01947S":{"alim":"U12"},"00181S":{"alim":"B14"},"00987S":{"alim":"CE10"},"01748S":{"alim":"U14"},"00061S":{"alim":"CE05"},"00476S":{"alim":"CE04"},"00516S":{"alim":"U16"},"00479S":{"alim":"CE03"},"00442S":{"alim":"U04"},"00246S":{"alim":"CE03"},"00218S":{"alim":"U22"},"01812S":{"alim":"U15"},"00075S":{"alim":"U20"},"00151S":{"alim":"U03"},"01353S":{"alim":"U03"},"01107S":{"alim":"U19"},"00066S":{"alim":"U15"},"00451S":{"alim":"U07"},"01377S":{"alim":"U06"},"00766S":{"alim":"U08"},"01142S":{"alim":"U08"},"01817S":{"alim":"PG06"},"00649S":{"alim":"VM23"},"00603S":{"alim":"PG02"},"00733S":{"alim":"PG03"},"00736S":{"alim":"VM25"},"01811S":{"alim":"PT04"},"00648S":{"alim":"VM27"},"01213S":{"alim":"VM35"},"00489S":{"alim":"PG05"},"01535S":{"alim":"Z01"},"01182S":{"alim":"Z01"},"01123S":{"alim":"Z22"},"00575S":{"alim":"Z08"},"00581S":{"alim":"Z11"},"00210S":{"alim":"Z18"},"00564S":{"alim":"Z14"},"01099S":{"alim":"Z15"},"00550S":{"alim":"Z16"},"00551S":{"alim":"Z08"},"00916S":{"alim":"Z10"},"00673S":{"alim":"Z19"},"00886S":{"alim":"Z19"},"00734S":{"alim":"Z20"},"01308S":{"alim":"Z21"},"01276S":{"alim":"Z12"},"00591S":{"alim":"Z09"},"01243S":{"alim":"Z09"},"00788S":{"alim":"Z06"},"00763S":{"alim":"Z07"},"00470S":{"alim":"Z02"},"01447S":{"alim":"L22"},"01457S":{"alim":"SM21"},"01462S":{"alim":"ST21"},"01464S":{"alim":"CE22"},"01473S":{"alim":"PR24"},"01496S":{"alim":"SC21"},"01497S":{"alim":"ST21"},"01539S":{"alim":"IG22"},"01501S":{"alim":"HP23"},"01517S":{"alim":"CH22"},"01521S":{"alim":"A24"},"01562S":{"alim":"SI21"},"01576S":{"alim":"SI21"},"01578S":{"alim":"C42"},"01585S":{"alim":"Z20"},"01599S":{"alim":"U41"},"01610S":{"alim":"MI42"},"01641S":{"alim":"PR25"},"01651S":{"alim":"PR24"},"01676S":{"alim":"IG21"},"01697S":{"alim":"U07"},"01713S":{"alim":"PR23"},"01720S":{"alim":"MO23"},"01738S":{"alim":"AP42"},"01747S":{"alim":"SI21"},"01753S":{"alim":"ST12"},"01760S":{"alim":"CE22"},"01781S":{"alim":"G12"},"06000S":{"alim":"CÑ06"},"01788S":{"alim":"VM41"},"01802S":{"alim":"CE23"},"04030S":{"alim":"CÑ21"},"01825S":{"alim":"SI22"},"01828S":{"alim":"U41"},"01823S":{"alim":"MO23"},"01854S":{"alim":"C42"},"01878S":{"alim":"AP42"},"01886S":{"alim":"AP41"},"01895S":{"alim":"MO12"},"01905S":{"alim":"SA19"},"01934S":{"alim":"CL23"},"01954S":{"alim":"A04"},"01976S":{"alim":"G12"},"01967S":{"alim":"AP42"},"01983S":{"alim":"CE21"},"01498S":{"alim":"C41"},"01316S":{"alim":"SI21"},"01267S":{"alim":"CL24"},"01277S":{"alim":"AP44"},"01775S":{"alim":"A10"},"00775S":{"alim":"A10"}};

const SED_KEYS = Object.keys(SED).sort();

/* ==========================================================
   ESTADO DE LA APLICACIÓN
   ========================================================== */
let photos   = [];
let filtered = [];
let hiIdx    = -1;

/* ==========================================================
   RELOJ EN TIEMPO REAL
   ========================================================== */
function tick() {
  const now   = new Date();
  const dias  = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const fecha = `${dias[now.getDay()]} ${now.getDate()} ${meses[now.getMonth()]} ${now.getFullYear()}`;
  const hora  = now.toLocaleTimeString('es-PE', { hour12: false });

  document.getElementById('hdr-date').textContent = fecha;
  document.getElementById('hdr-time').textContent = hora;
}

setInterval(tick, 1000);
tick();

/* ==========================================================
   CAMPO RESPONSABLE – solo letras y espacios
   ========================================================== */
document.getElementById('resp-in').addEventListener('input', function () {
  this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü ]/g, '');
});

/* ==========================================================
   AUTOCOMPLETE SED
   ========================================================== */
const inSed  = document.getElementById('sed-input');
const inAlim = document.getElementById('alim-in');
const drop   = document.getElementById('sed-drop');
const btnClr = document.getElementById('sed-clear');

/**
 * Construye y muestra el dropdown con los resultados filtrados.
 * @param {string[]} keys - Lista de códigos SED a mostrar.
 */
function buildDrop(keys) {
  filtered = keys;
  hiIdx = -1;

  if (!keys.length) {
    drop.innerHTML = '<div class="sed-empty">Sin resultados</div>';
    drop.classList.add('open');
    return;
  }

  const max = Math.min(keys.length, 80);
  drop.innerHTML = keys.slice(0, max).map((k, i) =>
    `<div class="sed-opt" data-i="${i}" ontouchstart="" onclick="pickSed('${k}')">
       <span class="s-id">${k}</span>
       <span class="s-alim">${SED[k].alim}</span>
     </div>`
  ).join('') + (keys.length > max
    ? `<div class="sed-empty">… y ${keys.length - max} más</div>`
    : '');

  drop.classList.add('open');
}

/* Filtrar al escribir */
inSed.addEventListener('input', () => {
  const q = inSed.value.trim().toUpperCase();
  inAlim.value = '';
  inAlim.classList.remove('alim-ok');
  btnClr.classList.toggle('visible', q.length > 0);

  if (!q) {
    drop.classList.remove('open');
    return;
  }
  buildDrop(SED_KEYS.filter(k => k.includes(q)));
});

/* Navegación con teclado en el dropdown */
inSed.addEventListener('keydown', e => {
  const opts = drop.querySelectorAll('.sed-opt');
  if (!opts.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    hiIdx = Math.min(hiIdx + 1, opts.length - 1);
    highlightOption(opts);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    hiIdx = Math.max(hiIdx - 1, 0);
    highlightOption(opts);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (hiIdx >= 0 && filtered[hiIdx]) pickSed(filtered[hiIdx]);
  } else if (e.key === 'Escape') {
    drop.classList.remove('open');
  }
});

/**
 * Resalta la opción activa en el dropdown.
 * @param {NodeList} opts - Lista de elementos del dropdown.
 */
function highlightOption(opts) {
  opts.forEach((o, i) => o.classList.toggle('hi', i === hiIdx));
  opts[hiIdx]?.scrollIntoView({ block: 'nearest' });
}

/**
 * Selecciona un código SED y rellena el campo Alim.
 * @param {string} key - Código SED seleccionado.
 */
function pickSed(key) {
  inSed.value  = key;
  inAlim.value = SED[key].alim;
  inAlim.classList.add('alim-ok');
  drop.classList.remove('open');
  btnClr.classList.add('visible');
}

/** Limpia el campo SED y resetea el autocomplete. */
function clearSed() {
  inSed.value  = '';
  inAlim.value = '';
  inAlim.classList.remove('alim-ok');
  drop.classList.remove('open');
  btnClr.classList.remove('visible');
  inSed.focus();
}

/* Cerrar dropdown al tocar fuera */
document.addEventListener('click', e => {
  if (!e.target.closest('.sed-wrap')) drop.classList.remove('open');
});

/* ==========================================================
   GESTIÓN DE FOTOS
   ========================================================== */
document.getElementById('photo-file').addEventListener('change', function () {
  Array.from(this.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      photos.push(ev.target.result);
      renderPhotos();
    };
    reader.readAsDataURL(file);
  });
  this.value = ''; // Permite seleccionar la misma foto nuevamente
});

/** Renderiza la grilla de fotos adjuntadas. */
function renderPhotos() {
  const grid = document.getElementById('photo-grid');
  grid.innerHTML = photos.map((src, i) =>
    `<div class="photo-cell">
       <img src="${src}" alt="Foto ${i + 1}" />
       <button class="photo-del" onclick="delPhoto(${i})" aria-label="Eliminar foto">✕</button>
     </div>`
  ).join('') +
  `<label class="photo-add" for="photo-file">
     <span class="pa-plus">+</span><span>Agregar</span>
   </label>`;

  const count = photos.length;
  document.getElementById('photo-count').textContent =
    `${count} foto${count !== 1 ? 's' : ''} adjuntada${count !== 1 ? 's' : ''}`;
}

/**
 * Elimina una foto de la lista.
 * @param {number} index - Índice de la foto a eliminar.
 */
function delPhoto(index) {
  photos.splice(index, 1);
  renderPhotos();
}

/* ==========================================================
   GUARDAR REGISTRO
   ========================================================== */
function guardar() {
  const sed   = inSed.value.trim();
  const alim  = inAlim.value.trim();
  const celda = document.getElementById('celda-in').value.trim();
  const tern  = document.getElementById('ternas-in').value.trim();
  const resp  = document.getElementById('resp-in').value.trim();
  const comt  = document.getElementById('coment-in').value.trim();

  // Validaciones
  if (!sed || !SED[sed]) return showToast('Selecciona una SED válida', true);
  if (!celda)            return showToast('Ingresa la Celda', true);
  if (tern === '')       return showToast('Ingresa la cantidad de ternas', true);
  if (!resp)             return showToast('Ingresa el Responsable', true);

  const registro = {
    datetime:    new Date().toLocaleString('es-PE', { hour12: false }),
    sed,
    alim,
    celda,
    ternas:      parseInt(tern, 10),
    responsable: resp,
    comentarios: comt,
    fotos:       photos.length,
  };

  // TODO: enviar a SharePoint
  console.log('Registro listo:', JSON.stringify(registro, null, 2));
  showToast('Registro guardado correctamente');
  limpiar();
}

/* ==========================================================
   LIMPIAR FORMULARIO
   ========================================================== */
function limpiar() {
  inSed.value  = '';
  inAlim.value = '';
  inAlim.classList.remove('alim-ok');

  ['celda-in', 'ternas-in', 'resp-in', 'coment-in'].forEach(id => {
    document.getElementById(id).value = '';
  });

  photos = [];
  drop.classList.remove('open');
  btnClr.classList.remove('visible');
  renderPhotos();
}

/* ==========================================================
   NOTIFICACIÓN TOAST
   ========================================================== */
/**
 * Muestra una notificación flotante.
 * @param {string}  msg - Texto del mensaje.
 * @param {boolean} isError - Si es true, muestra en rojo.
 */
function showToast(msg, isError = false) {
  const toastEl = document.getElementById('toast');
  toastEl.textContent = msg;
  toastEl.className = 'toast' + (isError ? ' err' : '');
  void toastEl.offsetWidth; // Fuerza reflow para reiniciar la animación
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3200);
}

/* ==========================================================
   INICIALIZACIÓN
   ========================================================== */
renderPhotos();
