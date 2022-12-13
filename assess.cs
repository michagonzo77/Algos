static int MaxNumberOfBalloons(string text)
        {
            var dic = new Dictionary<char, int>()
            {
                {'b', 1 },
                {'a', 3 },
                {'n' , 2}
            };

            var dic2 = new Dictionary<char, int>();
            foreach (var ch in text)
            {
                if (dic2.ContainsKey(ch))
                    dic2[ch]++;
                else dic2.Add(ch, 1);
            }

            int count = int.MaxValue;
            foreach (var keyVal in dic)
            {
                if (!dic2.ContainsKey(keyVal.Key))
                    return 0;

                count = Math.Min(count, dic2[keyVal.Key] / keyVal.Value);
            }

            return count;
        }
string S = "NAABXXAN";
string T = "NAANAAXNABABYNNBZ";
string U = "QABAAAWOBL";