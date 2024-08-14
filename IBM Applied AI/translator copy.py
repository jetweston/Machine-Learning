
"""
Watson Translator Unittest from package/module import namesuncitons
"""

import json
import unittest
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

authenticator = IAMAuthenticator('_RGvvH069aB_4DQRwGSbtk4bHw_Ve6nU-nIG0fAsxnrY')
language_translator = LanguageTranslatorV3(
    version='2018-05-01',
    authenticator=authenticator
)


"""
Watson Translator Fuction
"""

def translate (phrase, lang):
    language_translator.set_service_url('https://api.us-south.language-translator.watson.cloud.ibm.com/instances/8a27c819-013b-48fd-8a7b-da87005c11de')
    translation = language_translator.translate(
    text=phrase,
    model_id=lang).get_result()
    print(json.dumps(translation, indent=2, ensure_ascii=False))


translate("hello there", "en-de")



class TestNotebook(unittest.TestCase):


    def test_translate(self):
        self.assertEquals("hallo dort", "hallo dort")


unittest.main(argv=['translate("hello there", "en-de")'], verbosity=2, exit=False)
