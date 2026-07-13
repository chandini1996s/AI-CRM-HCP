from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key= Ab8RN6L4AufWsEtWaCksZKZdV_Mbc75Gmj3Xpa-RPtYhpfD5kw,
)

print(llm.invoke("Say hello."))