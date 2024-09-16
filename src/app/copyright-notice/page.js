"use client"
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CopyrightPage() {
  return (
    <div>
        <Header />
      {/* About Me Section */}
      <section className="card mb-5">
        <h2 className='card-title'>Copyright Notice</h2>
        <p className='card-body'>
        Content on this site is copyright protected. We take the protection of our copyright very seriously. If we find that you have used our copyrighted material in violation of the License mentioned in this notice, we may take legal action against you and may seek compensation (costs) to prevent you from incurring financial loss or from using our material. And if you want to use the material legally, orders can be issued at your expense.
</p>
<p className='card-footer'>या साइटवरील सामग्री कॉपीराइट सुरक्षित आहे. आम्ही आमच्या कॉपीराइटचे संरक्षण अत्यंत गांभीर्याने घेतो. या नोटीसमध्ये नमूद केलेल्या परवान्याच्या उल्लंघनात तुम्ही आमच्या कॉपीराइट साहित्याचा वापर केल्याचे आम्हाला आढळल्यास, आम्ही तुमच्याविरूद्ध कायदेशीर कारवाई करू शकतो, आर्थिक नुकसान किंवा आमच्या साहित्याचा वापर करण्यापासून तुम्हाला रोखण्यासाठी आम्ही भरपाई (खर्च) मागू शकतो. आणि जर तुम्हाला कायदेशीरपणे साहित्याचा वापर करायचा असेल तर खर्च भरून आदेशही दिले जाऊ शकतात.

</p>
        
      </section>
      <Footer />
   </div>
  );
}