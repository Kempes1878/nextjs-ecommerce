const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL:
      "mongodb+srv://olas1878:Kempes_1878@cluster0.l7q0oqe.mongodb.net/next_ecommerce",
    ACCESS_TOKEN_SECRET:
      "Yrk{-@Nj~+gy82w(.Q<maxU?S)>!pW]T96q_M[X%GD*h4V}Z3hKCw/Bcmv{4?qbt-;F&!(T5rE<7~x}A^pP[XW:s=V6,_N9dQu8y`*Ab5!7j.}ER8ZFT<=:L~S#]N;(Hh2'm)Uxu&_P/wQ3f?er-T!#2@?shb.xGAk~'S_;B*4g35%C-[VmN7=(`$D]eJ{9Q/^,M}k>j7Qn;<`+A]@5B8}Y:[%6S9u,*hz^cqe3GR2Umaf?rWZMsT{",
    REFRESH_TOKEN_SECRET:
      "eN6MuP/8XQy$%7{}d#*sK@Lxv`9T_a<A~,Bhb=D5GCpkYFg>wVP7'5t3}v_T*cZ8VE>U,~`[WR2^:Nk6hC)$9S-4bmM(Q;dqyL=]pT<(V:5uw[c}gE]MZ%jk*9){=-$H#mv4^QetS,WbCfB.LDF;szg]e-(nm[)E`b!*Mx>;TAac}$f4^w&NSLyV+?JW<K{FuZ=q58N(7'$Lm4;X5!WSD&?Egxv-e,Y)GK`bkR>8fCHJ=BsVZ}hA/.d",
    PAYPAL_CLIENT_ID:
      "ATxM7UrLDle6LuVO0kFdS7CO7XnJiPG4UQVD-mF3pnF17QatZKdLD4RNGB_H_9L31nSLN0O4zMnWpRcr",
  },
});
