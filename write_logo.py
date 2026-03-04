import os
svg=open(os.path.join("static","images","logo.svg"),"w",encoding="utf-8")
svg.write(open("logo_data.txt","r",encoding="utf-8").read())
svg.close()
print("Logo saved!")